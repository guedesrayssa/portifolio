"use client";

import { useEffect, useRef } from "react";
import { CursorLeaf } from "./Ornaments";

const POSITION_LERP = 0.15;
const PETAL_POOL = 18;
const PETAL_SPAWN_DISTANCE = 30;
const LEAF_TIP_X = 9;
const LEAF_TIP_Y = 4;
const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, summary, [role="button"], [tabindex]:not([tabindex="-1"])';

type Petal = {
  node: HTMLElement;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  scale: number;
  life: number;
  span: number;
  active: boolean;
};

export function LeafCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const petalLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const leaf = leafRef.current;
    const petalLayer = petalLayerRef.current;
    if (!root || !leaf || !petalLayer) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const petals: Petal[] = Array.from(petalLayer.children).map((node) => ({
      node: node as HTMLElement,
      x: 0,
      y: 0,
      velocityX: 0,
      velocityY: 0,
      scale: 1,
      life: 0,
      span: 1,
      active: false,
    }));

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    const spawnAnchor = { x: current.x, y: current.y };
    let frame = 0;
    let mounted = false;
    let random = 0x2f6e2b1;

    // Deterministic drift so the trail never depends on Math.random timing jitter.
    const nextRandom = () => {
      random = (random * 1103515245 + 12345) & 0x7fffffff;
      return random / 0x7fffffff;
    };

    const releasePetal = (petal: Petal) => {
      petal.active = false;
      petal.node.style.opacity = "0";
    };

    const spawnPetal = (x: number, y: number, velocityX: number) => {
      const petal = petals.find((candidate) => !candidate.active);
      if (!petal) return;

      petal.active = true;
      petal.x = x + (nextRandom() - 0.5) * 12;
      petal.y = y + (nextRandom() - 0.5) * 10;
      petal.velocityX = velocityX * 0.14 + (nextRandom() - 0.5) * 1.1;
      petal.velocityY = -0.3 - nextRandom() * 0.4;
      petal.scale = 0.34 + nextRandom() * 0.26;
      petal.life = 0;
      petal.span = 900 + nextRandom() * 700;
      petal.node.style.opacity = "0";
    };

    const render = () => {
      const previousX = current.x;

      current.x += (target.x - current.x) * POSITION_LERP;
      current.y += (target.y - current.y) * POSITION_LERP;

      const velocityX = current.x - previousX;

      // The leaf holds a fixed tilt: it drifts with the pointer, it never spins.
      leaf.style.transform = `translate3d(${current.x - LEAF_TIP_X}px, ${current.y - LEAF_TIP_Y}px, 0)`;

      if (!mounted) {
        mounted = true;
        root.dataset.ready = "true";
        document.documentElement.classList.add("has-leaf-cursor");
      }

      if (Math.hypot(current.x - spawnAnchor.x, current.y - spawnAnchor.y) > PETAL_SPAWN_DISTANCE) {
        spawnAnchor.x = current.x;
        spawnAnchor.y = current.y;
        spawnPetal(current.x, current.y, velocityX);
      }

      for (const petal of petals) {
        if (!petal.active) continue;

        petal.life += 16.7;
        if (petal.life >= petal.span) {
          releasePetal(petal);
          continue;
        }

        const progress = petal.life / petal.span;
        petal.velocityY += 0.024;
        petal.velocityX *= 0.99;
        petal.x += petal.velocityX;
        petal.y += petal.velocityY;

        petal.node.style.opacity = String((1 - progress) * 0.55);
        petal.node.style.transform = `translate3d(${petal.x - 9}px, ${petal.y - 18}px, 0) scale(${petal.scale})`;
      }

      frame = window.requestAnimationFrame(render);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const handleOver = (event: PointerEvent) => {
      const node = event.target as HTMLElement | null;
      root.dataset.interactive = node?.closest?.(INTERACTIVE_SELECTOR) ? "true" : "false";
    };

    const handleLeave = () => root.style.setProperty("--leaf-visibility", "0");
    const handleEnter = () => root.style.setProperty("--leaf-visibility", "1");

    const teardown = () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-leaf-cursor");
      delete root.dataset.ready;
      petals.forEach(releasePetal);
    };

    const handleMediaChange = () => {
      if (finePointer.matches && !reducedMotion.matches) {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(render);
        return;
      }
      teardown();
      mounted = false;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    document.addEventListener("pointerenter", handleEnter);
    finePointer.addEventListener("change", handleMediaChange);
    reducedMotion.addEventListener("change", handleMediaChange);
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerleave", handleLeave);
      document.removeEventListener("pointerenter", handleEnter);
      finePointer.removeEventListener("change", handleMediaChange);
      reducedMotion.removeEventListener("change", handleMediaChange);
      teardown();
    };
  }, []);

  return (
    <div className="leaf-cursor" ref={rootRef} aria-hidden="true">
      <div className="leaf-cursor-petals" ref={petalLayerRef}>
        {Array.from({ length: PETAL_POOL }, (_, index) => (
          <span className="leaf-petal" key={index}>
            <CursorLeaf />
          </span>
        ))}
      </div>
      <div className="leaf-cursor-tip" ref={leafRef}>
        <CursorLeaf />
      </div>
    </div>
  );
}
