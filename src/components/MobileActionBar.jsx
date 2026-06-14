import React from "react";
import { Brain, HeartPulse, Lightbulb, ListChecks } from "lucide-react";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function MobileActionBar({ onStress }) {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 rounded-[1.4rem] border border-white/75 bg-white/85 p-2 shadow-soft backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-4 gap-2">
        <button
          type="button"
          onClick={onStress}
          className="focus-ring flex min-h-14 flex-col items-center justify-center rounded-2xl bg-berry px-2 text-xs font-extrabold text-white"
        >
          <HeartPulse className="mb-1 h-5 w-5" />
          Ruhe
        </button>
        <button
          type="button"
          onClick={() => scrollTo("motivation")}
          className="focus-ring flex min-h-14 flex-col items-center justify-center rounded-2xl bg-cream px-2 text-xs font-extrabold text-berry"
        >
          <Brain className="mb-1 h-5 w-5" />
          Mut
        </button>
        <button
          type="button"
          onClick={() => scrollTo("tipps")}
          className="focus-ring flex min-h-14 flex-col items-center justify-center rounded-2xl bg-cream px-2 text-xs font-extrabold text-berry"
        >
          <Lightbulb className="mb-1 h-5 w-5" />
          Tipps
        </button>
        <button
          type="button"
          onClick={() => scrollTo("last-minute")}
          className="focus-ring flex min-h-14 flex-col items-center justify-center rounded-2xl bg-cream px-2 text-xs font-extrabold text-berry"
        >
          <ListChecks className="mb-1 h-5 w-5" />
          Check
        </button>
      </div>
    </nav>
  );
}
