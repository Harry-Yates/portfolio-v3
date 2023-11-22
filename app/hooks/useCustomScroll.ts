"use client";

import { useEffect } from "react";

const useCustomScroll = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastScroll = 0;
      const scrollSpeed = 0.1;

      const onScroll = (e: any) => {
        lastScroll += e.deltaY * scrollSpeed;
        e.preventDefault();
      };

      window.addEventListener("wheel", onScroll, { passive: false });

      const animateScroll = () => {
        window.scrollTo(0, lastScroll);
        lastScroll += (window.pageYOffset - lastScroll) * 0.1;
        requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);

      return () => {
        window.removeEventListener("wheel", onScroll);
      };
    }
  }, []);
};

export default useCustomScroll;
