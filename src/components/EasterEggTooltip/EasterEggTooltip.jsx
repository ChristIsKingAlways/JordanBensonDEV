/**
 * Easter egg: hover any [data-code-snippet] region for 1.5s → glass tooltip with a curated code peek.
 * Disabled when prefers-reduced-motion: reduce. Clears on leave, scroll, or Escape.
 */
import { useEffect, useRef, useState } from "react";
import { CODE_SNIPPET_MAP } from "../../data/codeSnippets.js";
import "./EasterEggTooltip.css";

const HOVER_MS = 1500;

function EasterEggTooltip() {
  const [open, setOpen] = useState(false);
  const [snippet, setSnippet] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const hostRef = useRef(null);
  const timerRef = useRef(null);
  const lastPointerRef = useRef({ x: 0, y: 0 });

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
      clearTimer();
      hostRef.current = null;
      setOpen(false);
      setSnippet("");
    };

    const onMouseMove = (e) => {
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
        setSnippet(text);
        setPos({ x: left, y: Math.max(pad, top) });
        setOpen(true);
      }, HOVER_MS);
    };

    const onMouseOut = (e) => {
      const host = hostRef.current;
      if (!host) return;
      const rt = e.relatedTarget;
      if (rt && host.contains(rt)) return;
      hide();
    };

    const onScroll = () => {
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

  if (!open || !snippet) return null;

  return (
    <div
      className="easter-egg-tooltip"
      style={{ left: pos.x, top: pos.y }}
      role="tooltip"
      aria-live="polite"
    >
      <p className="easter-egg-tooltip__eyebrow">Peek under the hood</p>
      <pre className="easter-egg-tooltip__pre">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}

export default EasterEggTooltip;
