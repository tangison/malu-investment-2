"use client";

import { useEffect } from "react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any;
    let raf: number;

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    };

    // Only init if user doesn't prefer reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      init();
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
