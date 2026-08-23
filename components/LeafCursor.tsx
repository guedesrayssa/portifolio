"use client";

import { useEffect, useRef } from "react";
import { CursorLeaf } from "./Ornaments";

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

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const previous = { x: pointer.x, y: pointer.y };
    const spawnAnchor = { x: pointer.x, y: pointer.y };
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
      const velocityX = pointer.x - previous.x;
      previous.x = pointer.x;
      previous.y = pointer.y;

      if (Math.hypot(pointer.x - spawnAnchor.x, pointer.y - spawnAnchor.y) > PETAL_SPAWN_DISTANCE) {
        spawnAnchor.x = pointer.x;
        spawnAnchor.y = pointer.y;
        spawnPetal(pointer.x, pointer.y, velocityX);
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

    // The leaf is written straight from the event, so it tracks the pointer with no lag.
    // Only the petals it sheds are animated on a frame loop.
    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      leaf.style.transform = `translate3d(${pointer.x - LEAF_TIP_X}px, ${pointer.y - LEAF_TIP_Y}px, 0)`;

      // Reveal only once the leaf sits under a real pointer position.
      if (!mounted) {
        mounted = true;
        root.dataset.ready = "true";
        document.documentElement.classList.add("has-leaf-cursor");
      }
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
