/**
 * Block: scroll-progress
 * Thin gradient bar scaled to scroll depth — matches jordanbensondev.com top indicator.
 */
import { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${p})` }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
