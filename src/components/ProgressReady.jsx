import React, { useState } from "react";
import { Sparkles } from "lucide-react";

const checks = [
  "Ich kann mündlich mit einer Definition beginnen.",
  "Ich kenne Beispiele zu den wichtigsten Theorien.",
  "Ich darf kurz nachdenken, ohne panisch zu werden.",
  "Ich hole zuerst sichere Punkte.",
  "Ich atme aus, wenn es eng wird."
];

export default function ProgressReady() {
  const [done, setDone] = useState([0, 1, 2]);
  const progress = Math.round((done.length / checks.length) * 100);

  const toggle = (index) => {
    setDone((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <section className="section relative z-10 pb-24">
      <div className="glass rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="pill">
              <Sparkles className="h-4 w-4" />
              Du bist bereit
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-berry">
              Bereitschaftsanzeige
            </h2>
          </div>
          <div className="text-5xl font-extrabold text-berry">{progress}%</div>
        </div>

        <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rosewood via-blush to-sage transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checks.map((check, index) => {
            const checked = done.includes(index);
            return (
              <button
                key={check}
                type="button"
                onClick={() => toggle(index)}
                className={`focus-ring rounded-2xl p-4 text-left font-semibold leading-7 transition ${
                  checked ? "bg-berry text-white" : "bg-white/70 text-berry/75 hover:bg-white"
                }`}
              >
                {checked ? "✓ " : ""}{check}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
