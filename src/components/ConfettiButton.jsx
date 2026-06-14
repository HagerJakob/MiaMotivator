import { useState } from "react";

const colors = ["#f7c8d0", "#d9d0f3", "#b9d6c4", "#ffe1a8", "#8f4e5c"];

export default function ConfettiButton() {
  const [pieces, setPieces] = useState([]);

  const celebrate = () => {
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

  return (
    <>
      <button
        type="button"
        onClick={celebrate}
        className="focus-ring mt-7 w-full rounded-full bg-gradient-to-r from-rosewood to-berry px-6 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5"
      >
        Ich schaffe das
      </button>
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
