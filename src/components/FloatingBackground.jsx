import React from "react";

export default function FloatingBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[8%] top-24 h-28 w-28 rounded-full bg-blush/30 blur-2xl animate-float" />
      <div className="absolute right-[10%] top-36 h-32 w-32 rounded-full bg-lavender/40 blur-2xl animate-float [animation-delay:1.5s]" />
      <div className="absolute bottom-16 left-[18%] h-24 w-24 rounded-full bg-sage/35 blur-2xl animate-float [animation-delay:3s]" />
      <div className="absolute inset-0 opacity-45">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="absolute text-sm text-rosewood/30"
            style={{
              left: `${(index * 17) % 96}%`,
              top: `${12 + ((index * 23) % 78)}%`,
              animation: `float ${5 + (index % 5)}s ease-in-out infinite`,
              animationDelay: `${index * 0.45}s`
            }}
          >
            {index % 3 === 0 ? "✦" : index % 3 === 1 ? "♡" : "·"}
          </span>
        ))}
      </div>
    </div>
  );
}
