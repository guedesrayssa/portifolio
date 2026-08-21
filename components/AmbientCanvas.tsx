"use client";

import { useEffect, useRef } from "react";

type AmbientCanvasProps = {
  tone?: "dark" | "light";
  className?: string;
};

type Point = {
  x: number;
  y: number;
  radius: number;
  phase: number;
};

function seededPoints(count: number): Point[] {
  let seed = 4173;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  return Array.from({ length: count }, () => ({
    x: random(),
    y: random(),
    radius: 0.45 + random() * 1.1,
    phase: random() * Math.PI * 2,
  }));
}

const points = seededPoints(36);

export function AmbientCanvas({ tone = "dark", className }: AmbientCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let visible = true;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const moving = reducedMotion.matches ? 0 : time * 0.00008;
      const ink = tone === "dark" ? "197, 160, 89" : "16, 16, 16";

      context.lineWidth = 0.5;
      for (let index = 0; index < points.length; index += 1) {
        const point = points[index];
        const x = point.x * width + Math.sin(moving + point.phase) * 10;
        const y = point.y * height + Math.cos(moving * 0.7 + point.phase) * 8;

        context.beginPath();
        context.fillStyle = `rgba(${ink}, ${tone === "dark" ? 0.15 : 0.06})`;
        context.arc(x, y, point.radius, 0, Math.PI * 2);
        context.fill();

        if (index % 4 === 0) {
          const next = points[(index + 7) % points.length];
          context.beginPath();
          context.strokeStyle = `rgba(${ink}, ${tone === "dark" ? 0.045 : 0.025})`;
          context.moveTo(x, y);
          context.lineTo(next.x * width, next.y * height);
          context.stroke();
        }
      }

      if (!reducedMotion.matches && visible) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      render();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      start();
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else window.cancelAnimationFrame(frame);
    });
    const handleMotionChange = () => start();

    resize();
    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    reducedMotion.addEventListener("change", handleMotionChange);
    start();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, [tone]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
