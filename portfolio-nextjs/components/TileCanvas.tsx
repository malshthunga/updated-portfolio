"use client";

import { useEffect, useRef } from "react";

type TileCanvasProps = {
  /** "r,g,b" string, e.g. "255,138,61" */
  color?: string;
};

/**
 * Renders a faint grid over the parent <section>, and lights up tiles
 * in `color` as the cursor moves across them, fading out with a trail.
 * Must be placed as the first child of a `position: relative` section.
 */
export default function TileCanvas({ color = "255,138,61" }: TileCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const section = canvas.closest("section");
    if (!section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      DPR = 1;
    const cell = 56;
    const lit: Record<string, number> = {};
    let raf = 0;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const rect = section!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const c = Math.floor(x / cell);
      const r = Math.floor(y / cell);
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const dist = Math.abs(dr) + Math.abs(dc);
          const target = dist === 0 ? 1 : dist === 1 ? 0.5 : 0.2;
          const key = `${r + dr},${c + dc}`;
          lit[key] = Math.max(lit[key] || 0, target);
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      ctx!.strokeStyle = "rgba(255,255,255,0.035)";
      ctx!.lineWidth = 1;
      for (let x = 0; x < W; x += cell) {
        ctx!.beginPath();
        ctx!.moveTo(x + 0.5, 0);
        ctx!.lineTo(x + 0.5, H);
        ctx!.stroke();
      }
      for (let y = 0; y < H; y += cell) {
        ctx!.beginPath();
        ctx!.moveTo(0, y + 0.5);
        ctx!.lineTo(W, y + 0.5);
        ctx!.stroke();
      }

      Object.keys(lit).forEach((key) => {
        const a = lit[key];
        if (a < 0.015) {
          delete lit[key];
          return;
        }
        const [r, c] = key.split(",").map(Number);
        const tx = c * cell,
          ty = r * cell;
        ctx!.fillStyle = `rgba(${color},${(a * 0.32).toFixed(3)})`;
        ctx!.fillRect(tx, ty, cell, cell);
        ctx!.strokeStyle = `rgba(${color},${(a * 0.9).toFixed(3)})`;
        ctx!.lineWidth = 1;
        ctx!.strokeRect(tx + 0.5, ty + 0.5, cell - 1, cell - 1);
        lit[key] *= 0.9;
      });

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    section.addEventListener("mousemove", onMouseMove);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        maskImage:
          "radial-gradient(ellipse 85% 65% at 50% 25%, black, transparent)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 65% at 50% 25%, black, transparent)",
      }}
    />
  );
}
