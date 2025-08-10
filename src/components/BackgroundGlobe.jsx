import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

export default function BackgroundGlobe() {
  const elRef = useRef(null);
  const [vanta, setVanta] = useState(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (!vanta && !prefersReduced && elRef.current) {
      setVanta(
        GLOBE({
          el: elRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1.0,
          scaleMobile: 1.0,
          // Colors from your example; tweak anytime:
          color: 0xf25839,        // globe line color (orange)
          size: 0.6,              // dot/line thickness/scale
          backgroundColor: 0x0044a2, // deep blue background
        })
      );
    }
    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return (
    <div
      ref={elRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}