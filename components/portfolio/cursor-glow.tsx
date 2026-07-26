"use client";

import { useEffect, useState } from "react";

/**
 * Soft teal glow that follows the cursor on large screens. Hidden until the
 * first pointer move and disabled on touch / small viewports.
 */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-300 lg:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute h-[600px] w-[600px] rounded-full"
        style={{
          left: pos.x - 300,
          top: pos.y - 300,
          background:
            "radial-gradient(circle, rgba(94, 234, 212, 0.08) 0%, transparent 70%)",
          transform: "translate3d(0, 0, 0)",
          willChange: "left, top",
        }}
      />
    </div>
  );
}
