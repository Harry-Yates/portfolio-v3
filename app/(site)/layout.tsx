"use client";

import React, { useEffect } from "react";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (typeof window !== "undefined" && !isMobile) {
      let lastScroll = 0;
      const scrollSpeed = 0.2;

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

  return (
    <html lang="en">
      <body
        style={{ fontFamily: "'Helvetica Now Display', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
