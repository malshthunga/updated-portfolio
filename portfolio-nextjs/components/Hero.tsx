"use client";

import { useEffect, useRef } from "react";

type Node = {
  theta: number;
  phi: number;
  r: number;
  pulse: number;
  offX: number;
  offY: number;
  velX: number;
  velY: number;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      DPR = 1;
    let raf = 0;
    let rotation = 0;
    let mouseX: number | null = null;
    let mouseY: number | null = null;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas!.parentElement!;
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();

    const NUM = window.innerWidth < 700 ? 90 : 190;
    const RADIUS = Math.min(W, H) * 0.5;
    const nodes: Node[] = [];
    for (let i = 0; i < NUM; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = RADIUS * (0.6 + Math.random() * 0.4);
      nodes.push({
        theta,
        phi,
        r,
        pulse: Math.random() * Math.PI * 2,
        offX: 0,
        offY: 0,
        velX: 0,
        velY: 0,
      });
    }

    function project(n: Node) {
      const cx = W / 2,
        cy = H / 2;
      const t = n.theta + rotation;
      const x = cx + n.r * Math.sin(n.phi) * Math.cos(t);
      const y =
        cy +
        n.r * Math.cos(n.phi) * 0.62 +
        n.r * Math.sin(n.phi) * Math.sin(t) * 0.22;
      const depth = Math.sin(n.phi) * Math.sin(t);
      return { x, y, depth };
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }
    function onMouseLeave() {
      mouseX = null;
      mouseY = null;
    }

    function tick() {
      ctx!.clearRect(0, 0, W, H);
      rotation += 0.006;

      const pts = nodes.map((n) => {
        const p = project(n);
        n.pulse += 0.02;

        if (mouseX !== null && mouseY !== null) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const pushRadius = 160;
          if (dist < pushRadius) {
            const force = (1 - dist / pushRadius) * 10;
            n.velX += (dx / dist) * force;
            n.velY += (dy / dist) * force;
          }
        }
        n.velX += -n.offX * 0.02;
        n.velY += -n.offY * 0.02;
        n.velX *= 0.88;
        n.velY *= 0.88;
        n.offX += n.velX;
        n.offY += n.velY;

        return { x: p.x + n.offX, y: p.y + n.offY, depth: p.depth, node: n };
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const avgDepth = (pts[i].depth + pts[j].depth) / 2;
            const alpha = (1 - dist / 130) * (0.34 + avgDepth * 0.28);
            ctx!.strokeStyle = `rgba(255,150,80,${Math.max(alpha, 0.05)})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(pts[i].x, pts[i].y);
            ctx!.lineTo(pts[j].x, pts[j].y);
            ctx!.stroke();
          }
        }
      }

      pts.forEach((p) => {
        let boost = 0;
        if (mouseX !== null && mouseY !== null) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 170) boost = (1 - d / 170) * 3.2;
        }
        const size = 1.6 + p.depth * 1.2 + Math.sin(p.node.pulse) * 0.4 + boost;
        const alpha = 0.55 + p.depth * 0.35 + boost * 0.3;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, Math.max(size, 0.9), 0, Math.PI * 2);
        ctx!.fillStyle =
          boost > 0.3
            ? `rgba(255,161,94,${Math.min(alpha, 1)})`
            : `rgba(140,170,255,${Math.min(alpha, 1)})`;
        ctx!.fill();
      });

      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-32 pb-20 px-8"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-[2] max-w-3xl">
        <div className="eyebrow justify-center mx-auto mb-5.5">
          Open to IT Support · Data · AI/ML roles
        </div>
        <h1 className="text-[clamp(42px,8vw,84px)] font-bold leading-[1.02] mb-4.5 uppercase">
          Nethmi
          <br />
          Malsha
        </h1>
        <div className="font-mono text-accent2 text-[15px] tracking-wide mb-9">
          IT GRADUATE — ADELAIDE, AUSTRALIA
        </div>
        <div className="flex gap-3.5 justify-center flex-wrap">

          <a href="https://www.linkedin.com/in/nethmi-ranathunga/" target="_blank" className="btn btn-outline">
            LinkedIn
          </a>
          <a href="https://github.com/malshthunga" target="_blank" className="btn btn-outline">
            GitHub
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] text-textFaint uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-textFaint to-transparent animate-pulse" />
      </div>
    </section>
  );
}
