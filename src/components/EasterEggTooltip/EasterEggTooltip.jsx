/**
 * Easter egg: hover any [data-code-snippet] region for 1.5s → glass tooltip with a curated code peek.
 * Tooltip hides on the next pointer move; still inside the same region restarts the dwell timer.
 * If the code block overflows, after 750ms it ease-scrolls down (~1.5s), waits 750ms, then ease-scrolls to top (~1.5s).
 * Disabled when prefers-reduced-motion: reduce. Also clears on leave, scroll, or Escape.
 */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CODE_SNIPPET_MAP } from "../../data/codeSnippets.js";
import "./EasterEggTooltip.css";

const HOVER_MS = 1500;
/** Pause before auto-scroll; dwell at bottom before returning to top */
const AUTO_SCROLL_PHASE_MS = 750;
/** Readable eased scroll duration for tooltip code block */
const AUTO_SCROLL_DURATION_MS = 1500;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

/**
 * Animate `el.scrollTop` to `targetTop` over `durationMs` with ease-in-out cubic.
 * Returns `cancel()` for cleanup. Skips animation if already there.
 */
function animateScrollTop(el, targetTop, durationMs, onDone, isCancelled) {
  let rafId = 0;
  let hardCancel = false;
  const cancel = () => {
    hardCancel = true;
    cancelAnimationFrame(rafId);
  };
  const startTop = el.scrollTop;
  const delta = targetTop - startTop;
  const t0 = performance.now();

  if (Math.abs(delta) < 0.5) {
    el.scrollTop = targetTop;
    if (!isCancelled()) onDone?.();
    return () => {};
  }

  const tick = (now) => {
    if (hardCancel || isCancelled()) return;
    const u = Math.min(1, (now - t0) / durationMs);
    el.scrollTop = startTop + delta * easeInOutCubic(u);
    if (u < 1) {
      rafId = requestAnimationFrame(tick);
    } else {
      el.scrollTop = targetTop;
      onDone?.();
    }
  };
  rafId = requestAnimationFrame(tick);
  return cancel;
}

function EasterEggTooltip() {
  const [open, setOpen] = useState(false);
  const [snippet, setSnippet] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const hostRef = useRef(null);
  const timerRef = useRef(null);
  const openRef = useRef(false);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  /** Tooltip root while open — ignore scroll events from inner `<pre>` auto-scroll */
  const tooltipRootRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return undefined;

    const clearTimer = () => {
      if (timerRef.current != null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const hide = () => {
      openRef.current = false;
      clearTimer();
      hostRef.current = null;
      setOpen(false);
      setSnippet("");
    };

    const scheduleReveal = (host) => {
      clearTimer();
      hostRef.current = host;
      timerRef.current = window.setTimeout(() => {
        const id = host.getAttribute("data-code-snippet");
        const text = id ? CODE_SNIPPET_MAP[id] : null;
        if (!text || hostRef.current !== host) return;
        const { x, y } = lastPointerRef.current;
        const pad = 16;
        const estW = 320;
        const left = Math.min(Math.max(pad, x - estW / 2), window.innerWidth - estW - pad);
        const top = Math.min(y + 14, window.innerHeight - pad - 120);
        openRef.current = true;
        setSnippet(text);
        setPos({ x: left, y: Math.max(pad, top) });
        setOpen(true);
      }, HOVER_MS);
    };

    const onMouseMove = (e) => {
      if (openRef.current) {
        const h = hostRef.current;
        openRef.current = false;
        setOpen(false);
        setSnippet("");
        clearTimer();
        hostRef.current = null;
        const under = e.target?.closest?.("[data-code-snippet]");
        if (h && under === h) {
          lastPointerRef.current = { x: e.clientX, y: e.clientY };
          scheduleReveal(h);
        }
        return;
      }
      const host = hostRef.current;
      if (!host || !host.contains(e.target)) return;
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e) => {
      const host = e.target?.closest?.("[data-code-snippet]");
      lastPointerRef.current = { x: e.clientX, y: e.clientY };

      if (!host) {
        hide();
        return;
      }
      if (hostRef.current === host) return;

      scheduleReveal(host);
    };

    const onMouseOut = (e) => {
      const host = hostRef.current;
      if (!host) return;
      const rt = e.relatedTarget;
      if (rt && host.contains(rt)) return;
      hide();
    };

    const onScroll = (e) => {
      const t = e.target;
      if (t instanceof Element && tooltipRootRef.current?.contains(t)) return;
      hide();
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") hide();
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseout", onMouseOut, true);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseout", onMouseOut, true);
      window.removeEventListener("scroll", onScroll, { capture: true });
      document.removeEventListener("keydown", onKeyDown);
      clearTimer();
    };
  }, []);

  const preRef = useRef(null);

  useLayoutEffect(() => {
    if (!open || !snippet) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let alive = true;
    let cancelScrollAnim = null;
    const timeouts = [];
    const pushTimeout = (fn, ms) => {
      const id = window.setTimeout(() => {
        if (alive) fn();
      }, ms);
      timeouts.push(id);
      return id;
    };

    const clearPhase = () => {
      alive = false;
      cancelScrollAnim?.();
      cancelScrollAnim = null;
      timeouts.forEach((id) => clearTimeout(id));
      timeouts.length = 0;
    };

    const run = () => {
      if (!alive) return;
      const el = preRef.current;
      if (!el) return;
      el.scrollTop = 0;
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (maxScroll < 2) return;

      pushTimeout(() => {
        if (!alive) return;
        const node = preRef.current;
        if (!node) return;
        const max = node.scrollHeight - node.clientHeight;
        if (max < 2) return;

        cancelScrollAnim = animateScrollTop(
          node,
          max,
          AUTO_SCROLL_DURATION_MS,
          () => {
            cancelScrollAnim = null;
            if (!alive) return;
            pushTimeout(() => {
              if (!alive) return;
              const n = preRef.current;
              if (!n) return;
              cancelScrollAnim = animateScrollTop(
                n,
                0,
                AUTO_SCROLL_DURATION_MS,
                () => {
                  cancelScrollAnim = null;
                },
                () => !alive
              );
            }, AUTO_SCROLL_PHASE_MS);
          },
          () => !alive
        );
      }, AUTO_SCROLL_PHASE_MS);
    };

    let innerRaf = 0;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(run);
    });

    return () => {
      cancelAnimationFrame(outerRaf);
      cancelAnimationFrame(innerRaf);
      clearPhase();
    };
  }, [open, snippet]);

  if (!open || !snippet) return null;

  return (
    <div
      ref={tooltipRootRef}
      className="easter-egg-tooltip"
      style={{ left: pos.x, top: pos.y }}
      role="tooltip"
      aria-live="polite"
    >
      <p className="easter-egg-tooltip__eyebrow">Peek under the hood</p>
      <pre ref={preRef} className="easter-egg-tooltip__pre">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}

export default EasterEggTooltip;
