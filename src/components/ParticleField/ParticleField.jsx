/**
 * Block: particle-field
 * Gold dust behind content: many particles (viewport-scaled), larger dots + glow, visible layer opacity.
 */
import { useEffect, useRef } from "react";
import "./ParticleField.css";

/** ~1 particle per ~9k px², clamped for perf and small phones */
function particleCountForViewport(w, h) {
  const area = w * h;
  return Math.min(220, Math.max(100, Math.floor(area / 9000)));
}

const GOLD = "212, 175, 55";
const GOLD_HOT = "240, 216, 117";

function ParticleField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf;
    const particles = [];
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      reducedMotion = mq.matches;
    };
    mq.addEventListener("change", onMotion);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      particles.length = 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const n = reducedMotion ? Math.min(40, particleCountForViewport(w, h)) : particleCountForViewport(w, h);
      for (let i = 0; i < n; i++) {
        const warm = Math.random() > 0.55;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2.2 + 0.6,
          vx: (Math.random() - 0.5) * (reducedMotion ? 0.02 : 0.28),
          vy: (Math.random() - 0.5) * (reducedMotion ? 0.02 : 0.28),
          a: Math.random() * 0.45 + (warm ? 0.35 : 0.25),
          rgb: warm ? GOLD_HOT : GOLD,
        });
      }
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
        }
        /* Glow first, then bright core (reads better on dark mesh) */
        const glowR = p.r * 2.8;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        g.addColorStop(0, `rgba(${p.rgb}, ${p.a * 0.5})`);
        g.addColorStop(0.45, `rgba(${p.rgb}, ${p.a * 0.12})`);
        g.addColorStop(1, `rgba(${p.rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb}, ${Math.min(1, p.a + 0.15)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    const onResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onMotion);
    };
  }, []);

  return <canvas ref={ref} className="particle-field" aria-hidden="true" />;
}

export default ParticleField;
