import { Heart, Sparkles } from "lucide-react";
import Countdown from "./Countdown.jsx";
import ConfettiButton from "./ConfettiButton.jsx";

export default function Hero({ targetDate, featuredTip, onStress }) {
  const scrollToTips = () => {
    document.getElementById("tipps")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section relative z-10 flex min-h-screen items-center pt-8">
      <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7">
          <div className="pill">
            <Sparkles className="h-4 w-4" />
            Morgen ist Matura. Heute ist Ruhe erlaubt.
          </div>
          <div className="space-y-5">
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-normal text-berry sm:text-6xl lg:text-7xl">
              Du schaffst das morgen ❤️
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-berry/78 sm:text-xl">
              Atme einmal aus. Du hast gelernt, du hast verstanden, und du darfst
              morgen ruhig Schritt fuer Schritt zeigen, was in dir steckt. Diese
              Seite ist dein kleiner Ort fuer Mut, Fokus und eine warme Pause.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToTips}
              className="focus-ring rounded-full bg-berry px-6 py-4 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-rosewood"
            >
              Ich brauche Motivation
            </button>
            <button
              type="button"
              onClick={onStress}
              className="focus-ring rounded-full border border-rosewood/20 bg-white/75 px-6 py-4 text-base font-bold text-berry transition hover:-translate-y-0.5 hover:bg-white"
            >
              Notfall-Button bei Stress
            </button>
          </div>
          <Countdown targetDate={targetDate} />
        </div>

        <aside className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-white/40">
            <span className="block h-full w-1/2 bg-gradient-to-r from-transparent via-blush to-transparent animate-shimmer" />
          </div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="pill bg-white/75">Warum du das kannst</span>
            <Heart className="h-6 w-6 fill-blush text-rosewood" />
          </div>
          <h2 className="font-display text-3xl font-bold text-berry">
            {featuredTip.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-berry/75">{featuredTip.text}</p>
          <div className="mt-6 rounded-3xl bg-cream/80 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood/70">
              Merksatz
            </p>
            <p className="mt-2 text-xl font-bold text-berry">{featuredTip.remember}</p>
          </div>
          <ConfettiButton />
        </aside>
      </div>
    </section>
  );
}
