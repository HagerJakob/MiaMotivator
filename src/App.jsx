import React, { useMemo, useRef, useState } from "react";
import Hero from "./components/Hero.jsx";
import PsychPhiloFocus from "./components/PsychPhiloFocus.jsx";
import EnglishOralPrep from "./components/EnglishOralPrep.jsx";
import TipCarousel from "./components/TipCarousel.jsx";
import BreathingExercise from "./components/BreathingExercise.jsx";
import MotivationSection from "./components/MotivationSection.jsx";
import LastMinuteTips from "./components/LastMinuteTips.jsx";
import ProgressReady from "./components/ProgressReady.jsx";
import StressButton from "./components/StressButton.jsx";
import MobileActionBar from "./components/MobileActionBar.jsx";
import FloatingBackground from "./components/FloatingBackground.jsx";
import { tips } from "./data/tips.js";

const examSchedule = [
  {
    id: "english",
    subject: "Englisch",
    label: "Englisch mündlich",
    time: "14:00",
    startsAt: new Date("2026-06-15T14:00:00")
  },
  {
    id: "psychology-philosophy",
    subject: "Psychologie & Philosophie",
    label: "Psychologie & Philosophie mündlich",
    time: "15:30",
    startsAt: new Date("2026-06-15T15:30:00")
  }
];

export default function App() {
  const calmRef = useRef(null);
  const [stressMode, setStressMode] = useState(false);
  const featuredTip = useMemo(
    () => tips.find((tip) => tip.id === "du-kannst-das") ?? tips[0],
    []
  );

  const handleStress = () => {
    setStressMode(true);
    calmRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="soft-grid min-h-screen overflow-hidden pb-24 sm:pb-0">
      <FloatingBackground />
      <Hero examSchedule={examSchedule} featuredTip={featuredTip} onStress={handleStress} />
      <PsychPhiloFocus />
      <TipCarousel />
      <section id="ruhe" ref={calmRef}>
        <BreathingExercise stressMode={stressMode} onSettled={() => setStressMode(false)} />
      </section>
      <MotivationSection />
      <LastMinuteTips />
      <EnglishOralPrep />
      <ProgressReady />
      <StressButton onClick={handleStress} />
      <MobileActionBar onStress={handleStress} />
    </main>
  );
}
