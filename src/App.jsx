import { useMemo, useRef, useState } from "react";
import Hero from "./components/Hero.jsx";
import TipCarousel from "./components/TipCarousel.jsx";
import BreathingExercise from "./components/BreathingExercise.jsx";
import MotivationSection from "./components/MotivationSection.jsx";
import LastMinuteTips from "./components/LastMinuteTips.jsx";
import ProgressReady from "./components/ProgressReady.jsx";
import StressButton from "./components/StressButton.jsx";
import FloatingBackground from "./components/FloatingBackground.jsx";
import { tips } from "./data/tips.js";

const MATURA_DATE = new Date("2026-06-15T08:00:00");

export default function App() {
  const calmRef = useRef(null);
  const [stressMode, setStressMode] = useState(false);
  const featuredTip = useMemo(
    () => tips.find((tip) => tip.category === "Motivation") ?? tips[0],
    []
  );

  const handleStress = () => {
    setStressMode(true);
    calmRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="soft-grid min-h-screen overflow-hidden">
      <FloatingBackground />
      <Hero targetDate={MATURA_DATE} featuredTip={featuredTip} onStress={handleStress} />
      <TipCarousel />
      <section ref={calmRef}>
        <BreathingExercise stressMode={stressMode} onSettled={() => setStressMode(false)} />
      </section>
      <MotivationSection />
      <LastMinuteTips />
      <ProgressReady />
      <StressButton onClick={handleStress} />
    </main>
  );
}
