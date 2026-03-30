/**
 * Block: particle-field
 * Gold dust behind content: viewport-scaled count, glow + core; count/size tuned below.
 */
import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import "./ParticleField.css";

/** ~1 particle per ~18k px² (half previous density); clamp 50–110 */
function particleCountForViewport(w, h) {
  const area = w * h;
  return Math.min(110, Math.max(50, Math.floor(area / 18000)));
}

const GOLD_DARK = "212, 175, 55";
const GOLD_HOT_DARK = "240, 216, 117";
/** Darker gold on light backgrounds so particles stay visible */
const GOLD_LIGHT = "130, 98, 28";
const GOLD_HOT_LIGHT = "165, 128, 38";

function rgbForParticle(isLight, warm) {
  if (isLight) return warm ? GOLD_HOT_LIGHT : GOLD_LIGHT;
  return warm ? GOLD_HOT_DARK : GOLD_DARK;
}

function ParticleField() {
  const ref = useRef(null);
  const { isLight } = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf;
    const particles = [];
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /** Cursor in viewport CSS px; far off-screen until first move (no initial blast). */
    let pointerX = -1e9;
    let pointerY = -1e9;

    /** Repulsion radius (px): particles outside ignore the pointer. */
    const POINTER_RADIUS = 150;
    /** Peak extra velocity per frame from repulsion (scaled by falloff²). */
    const POINTER_PUSH = 0.95;
    /** Ease velocity back toward each particle’s ambient drift after a disturbance. */
    const DRIFT_RESTORE = 0.042;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      reducedMotion = mq.matches;
    };
    mq.addEventListener("change", onMotion);

    const onPointerMove = (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

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
      const n = reducedMotion ? Math.min(20, particleCountForViewport(w, h)) : particleCountForViewport(w, h);
      for (let i = 0; i < n; i++) {
        const warm = Math.random() > 0.55;
        /* Core radius: 75% of prior range (0.6–2.8 → ~0.45–2.1) */
        const r = (Math.random() * 2.2 + 0.6) * 0.75;
        const vx = (Math.random() - 0.5) * (reducedMotion ? 0.02 : 0.28);
        const vy = (Math.random() - 0.5) * (reducedMotion ? 0.02 : 0.28);
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          vx,
          vy,
          baseVx: vx,
          baseVy: vy,
          a: Math.random() * 0.45 + (warm ? 0.35 : 0.25),
          rgb: rgbForParticle(isLight, warm),
        });
      }
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reducedMotion) {
          p.vx += (p.baseVx - p.vx) * DRIFT_RESTORE;
          p.vy += (p.baseVy - p.vy) * DRIFT_RESTORE;

          const dx = p.x - pointerX;
          const dy = p.y - pointerY;
          const dist2 = dx * dx + dy * dy;
          const r2 = POINTER_RADIUS * POINTER_RADIUS;
          if (dist2 > 4 && dist2 < r2) {
            const dist = Math.sqrt(dist2);
            const nx = dx / dist;
            const ny = dy / dist;
            const edge = 1 - dist / POINTER_RADIUS;
            const push = edge * edge * POINTER_PUSH;
            p.vx += nx * push;
            p.vy += ny * push;
          }

          const maxV = 4.2;
          const vm = Math.hypot(p.vx, p.vy);
          if (vm > maxV) {
            p.vx = (p.vx / vm) * maxV;
            p.vy = (p.vy / vm) * maxV;
          }

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
      window.removeEventListener("pointermove", onPointerMove);
      mq.removeEventListener("change", onMotion);
    };
  }, [isLight]);

  return <canvas ref={ref} className="particle-field" aria-hidden="true" />;
}

export default ParticleField;
