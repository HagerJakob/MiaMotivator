import React, { useEffect, useMemo, useState } from "react";
import { Wind } from "lucide-react";

const phases = [
  { label: "Einatmen", seconds: 4, hint: "Sanft Luft holen." },
  { label: "Halten", seconds: 4, hint: "Du bist sicher hier." },
  { label: "Ausatmen", seconds: 6, hint: "Langsam loslassen." }
];

export default function BreathingExercise({ stressMode, onSettled }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [count, setCount] = useState(phases[0].seconds);

  const phase = phases[phaseIndex];
  const progress = useMemo(() => count / phase.seconds, [count, phase.seconds]);

  useEffect(() => {
    setPhaseIndex(0);
    setCount(phases[0].seconds);
  }, [stressMode]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((current) => {
        if (current > 1) {
          return current - 1;
        }

        const next = (phaseIndex + 1) % phases.length;
        setPhaseIndex(next);
        if (next === 0 && stressMode) onSettled?.();
        return phases[next].seconds;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phaseIndex, stressMode, onSettled]);

  return (
    <section className="section relative z-10">
      <div className={`glass grid gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] ${stressMode ? "ring-4 ring-blush/60" : ""}`}>
        <div>
          <span className="pill">
            <Wind className="h-4 w-4" />
            Beruhigungsbereich
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-berry">
            Erst atmen, dann weiter
          </h2>
          <div className="mt-6 space-y-3 text-lg leading-8 text-berry/78">
            <p>Du musst nicht perfekt sein.</p>
            <p>Du darfst nervös sein und trotzdem gut abliefern.</p>
            <p>Ein Schritt nach dem anderen.</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-[2rem] bg-cream/80 p-6 text-center">
          <div
            className="grid h-48 w-48 place-items-center rounded-full border border-white bg-gradient-to-br from-blush/70 via-white to-lavender/70 shadow-soft transition-transform duration-700 sm:h-60 sm:w-60"
            style={{ transform: `scale(${0.78 + (1 - progress) * 0.18})` }}
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood/70">
                {phase.label}
              </p>
              <p className="mt-2 text-6xl font-extrabold text-berry">{count}</p>
              <p className="mt-2 text-sm font-semibold text-berry/60">{phase.hint}</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-base leading-7 text-berry/70">
            Rhythmus: 4 Sekunden einatmen, 4 halten, 6 ausatmen. Du darfst diese
            Übung so oft wiederholen, wie du willst.
          </p>
        </div>
      </div>
    </section>
  );
}
