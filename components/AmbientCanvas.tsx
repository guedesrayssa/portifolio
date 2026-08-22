"use client";

import { useEffect, useRef } from "react";

type AmbientCanvasProps = {
  tone?: "dark" | "light";
  density?: number;
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  radius: number;
  drift: number;
  rise: number;
  phase: number;
  sway: number;
  alpha: number;
};

function seededParticles(count: number): Particle[] {
  let seed = 4173;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  return Array.from({ length: count }, () => ({
    x: random(),
    y: random(),
    radius: 0.7 + random() * 2.1,
    drift: (random() - 0.5) * 0.06,
    rise: 0.05 + random() * 0.16,
    phase: random() * Math.PI * 2,
    sway: 6 + random() * 22,
    alpha: 0.18 + random() * 0.5,
  }));
}

export function AmbientCanvas({ tone = "dark", density = 52, className }: AmbientCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particles = seededParticles(density);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let visible = true;
    let elapsed = 0;
    let previous = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ink = tone === "dark" ? "197, 160, 89" : "16, 16, 16";
    const glow = tone === "dark" ? "242, 242, 242" : "16, 16, 16";

    const render = (time = 0) => {
      const delta = previous ? Math.min(time - previous, 48) : 16.7;
      previous = time;
      if (!reducedMotion.matches) elapsed += delta;

      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const travelled = (particle.y * height - (elapsed * particle.rise) / 16.7) % (height + 80);
        const y = travelled < -40 ? travelled + height + 80 : travelled;
        const x =
          particle.x * width +
          Math.sin(elapsed * 0.00042 + particle.phase) * particle.sway +
          (elapsed * particle.drift) / 60;
        const wrappedX = ((x % (width + 60)) + width + 60) % (width + 60) - 30;
        const twinkle = 0.62 + Math.sin(elapsed * 0.0011 + particle.phase * 1.7) * 0.38;
        const opacity = particle.alpha * twinkle * (tone === "dark" ? 0.5 : 0.16);

        context.beginPath();
        context.fillStyle = `rgba(${index % 5 === 0 ? ink : glow}, ${opacity})`;
        context.arc(wrappedX, y, particle.radius, 0, Math.PI * 2);
        context.fill();

        if (particle.radius > 2.2) {
          const halo = context.createRadialGradient(wrappedX, y, 0, wrappedX, y, particle.radius * 6);
          halo.addColorStop(0, `rgba(${ink}, ${opacity * 0.5})`);
          halo.addColorStop(1, `rgba(${ink}, 0)`);
          context.fillStyle = halo;
          context.beginPath();
          context.arc(wrappedX, y, particle.radius * 6, 0, Math.PI * 2);
          context.fill();
        }
      }

      if (!reducedMotion.matches && visible) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      previous = 0;
      frame = window.requestAnimationFrame(render);
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
  }, [density, tone]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
