import React from "react";
import { BookOpen, Heart, Sparkles } from "lucide-react";
import Countdown from "./Countdown.jsx";
import ConfettiButton from "./ConfettiButton.jsx";
import ExamSchedule from "./ExamSchedule.jsx";

export default function Hero({ examSchedule, featuredTip, onStress }) {
  const scrollToTips = () => {
    document.getElementById("motivation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section relative z-10 flex min-h-[100svh] items-center pt-5 sm:pt-8">
      <div className="grid w-full items-start gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-8">
        <div className="space-y-5 sm:space-y-7">
          <div className="pill text-xs sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Hauptfokus: Psychologie & Philosophie mündlich um 15:30
          </div>
          <div className="space-y-4 sm:space-y-5">
            <h1 className="font-display text-4xl font-extrabold leading-[0.98] tracking-normal text-berry min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
              Du schaffst Psychologie & Philosophie morgen ❤️
            </h1>
            <p className="max-w-2xl text-base leading-7 text-berry/78 sm:text-xl sm:leading-8">
              Atme einmal aus. Englisch ist vorher kurz dran, aber der große
              Fokus liegt auf Psychologie und Philosophie. Du hast die Theorien,
              Begriffe und Vergleiche vorbereitet. Morgen zeigst du sie ruhig,
              Schritt für Schritt.
            </p>
          </div>

          <Countdown exams={examSchedule} />
          <ExamSchedule exams={examSchedule} />

          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
            <button
              type="button"
              onClick={scrollToTips}
              className="focus-ring min-h-14 rounded-full bg-berry px-6 py-4 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-rosewood"
            >
              Ich brauche Motivation
            </button>
            <button
              type="button"
              onClick={onStress}
              className="focus-ring min-h-14 rounded-full border border-rosewood/20 bg-white/75 px-6 py-4 text-base font-bold text-berry transition hover:-translate-y-0.5 hover:bg-white"
            >
              Notfall-Button bei Stress
            </button>
          </div>
        </div>

        <aside className="glass relative overflow-hidden rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-white/40">
            <span className="block h-full w-1/2 bg-gradient-to-r from-transparent via-blush to-transparent animate-shimmer" />
          </div>
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
            <span className="pill bg-white/75 text-xs sm:text-sm">
              <BookOpen className="h-4 w-4" />
              Für Psychologie & Philosophie
            </span>
            <Heart className="h-6 w-6 fill-blush text-rosewood" />
          </div>
          <h2 className="font-display text-2xl font-bold text-berry sm:text-3xl">
            {featuredTip.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-berry/75 sm:text-lg sm:leading-8">
            {featuredTip.text}
          </p>
          <div className="mt-5 rounded-3xl bg-cream/80 p-4 sm:mt-6 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rosewood/70 sm:text-sm">
              Merksatz
            </p>
            <p className="mt-2 text-lg font-bold text-berry sm:text-xl">
              {featuredTip.remember}
            </p>
          </div>
          <ConfettiButton />
        </aside>
      </div>
    </section>
  );
}
