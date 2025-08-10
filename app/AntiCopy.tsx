"use client";

import { useEffect } from "react";

export default function AntiCopy() {
  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Prevent long press on mobile
    let touchTimer: NodeJS.Timeout;
    const handleTouchStart = (e: TouchEvent) => {
      touchTimer = setTimeout(() => e.preventDefault(), 500);
    };
    const handleTouchEnd = () => clearTimeout(touchTimer);

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    // Prevent copy/cut/paste
    const blockEvent = (e: Event) => e.preventDefault();
    ["copy", "cut", "paste"].forEach(evt =>
      document.addEventListener(evt, blockEvent)
    );

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      ["copy", "cut", "paste"].forEach(evt =>
        document.removeEventListener(evt, blockEvent)
      );
    };
  }, []);

  return null;
}
