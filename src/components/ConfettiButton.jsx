import React, { useState } from "react";

const colors = ["#f7c8d0", "#d9d0f3", "#b9d6c4", "#ffe1a8", "#8f4e5c"];

export default function ConfettiButton() {
  const [pieces, setPieces] = useState([]);
  const [runaway, setRunaway] = useState({ x: 0, y: 0, rotate: 0 });

  const celebrate = () => {
    setRunaway({ x: 0, y: 0, rotate: 0 });
    const nextPieces = Array.from({ length: 34 }).map((_, index) => ({
      id: `${Date.now()}-${index}`,
      left: Math.random() * 100,
      color: colors[index % colors.length],
      delay: Math.random() * 0.35,
      duration: 1.4 + Math.random() * 0.9,
      rotate: Math.random() * 180
    }));
    setPieces(nextPieces);
    window.setTimeout(() => setPieces([]), 2600);
  };

  const dodge = (event) => {
    event.preventDefault();
    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;
    const maxX = Math.min(260, Math.max(130, window.innerWidth * 0.34));
    const maxY = Math.min(180, Math.max(90, window.innerHeight * 0.18));
    setRunaway({
      x: directionX * (110 + Math.random() * maxX),
      y: directionY * (55 + Math.random() * maxY),
      rotate: directionX * (8 + Math.random() * 16)
    });
  };

  return (
    <>
      <div className="relative mt-7 grid min-h-56 gap-3 overflow-visible min-[430px]:grid-cols-2 min-[430px]:items-start">
        <button
          type="button"
          onClick={celebrate}
          className="focus-ring min-h-14 rounded-full bg-gradient-to-r from-rosewood to-berry px-6 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5"
        >
          Ich schaffe das
        </button>
        <button
          type="button"
          aria-label="Dieser Zweifel darf heute nicht bleiben"
          onPointerEnter={dodge}
          onPointerDown={dodge}
          onFocus={dodge}
          onClick={dodge}
          className="focus-ring min-h-14 rounded-full border border-rosewood/20 bg-white/80 px-5 py-4 text-base font-extrabold text-berry/70 shadow-sm transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${runaway.x}px, ${runaway.y}px) rotate(${runaway.rotate}deg)`
          }}
        >
          Ich schaffe das nicht
        </button>
      </div>
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece animate-confettiDrop"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotate}deg)`
          }}
        />
      ))}
    </>
  );
}
