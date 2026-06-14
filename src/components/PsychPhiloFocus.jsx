import React from "react";
import { Brain, GitCompare, Lightbulb } from "lucide-react";

const focusBlocks = [
  {
    title: "Psychologie",
    points: [
      "Lernpsychologie: klassische, operante und instrumentelle Konditionierung sauber trennen.",
      "Modelllernen: Bandura, Beobachtung, Nachahmung und Konsequenzen des Modells nennen.",
      "Persönlichkeit: Typologien kritisch sehen, Big Five als Dimensionen erklären."
    ]
  },
  {
    title: "Philosophie",
    points: [
      "Erkenntnistheorie: Rationalismus und Empirismus klar unterscheiden.",
      "Platon und Aristoteles vergleichen: Ideenwelt vs. Sinneserfahrung.",
      "Kant als Verbindung: Sinne liefern Inhalte, Verstand ordnet."
    ]
  },
  {
    title: "Mündlich antworten",
    points: [
      "Starte mit einer Definition, dann Beispiel, dann Abgrenzung.",
      "Wenn du unsicher bist, denke laut und logisch weiter.",
      "Bei Vergleichen immer beide Seiten kurz würdigen."
    ]
  }
];

export default function PsychPhiloFocus() {
  return (
    <section id="psych-philo" className="section relative z-10">
      <div className="mb-6">
        <span className="pill">
          <Brain className="h-4 w-4" />
          Hauptbereich: Psychologie & Philosophie
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold text-berry sm:text-4xl">
          Der wichtigste Teil morgen: ruhig erklären, vergleichen, begründen.
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {focusBlocks.map((block, index) => (
          <article
            key={block.title}
            className={`rounded-[1.6rem] p-5 shadow-soft ${
              index === 0 ? "bg-berry text-white" : "glass text-berry"
            }`}
          >
            <div className="mb-4 flex items-center gap-2">
              {index === 1 ? <GitCompare className="h-5 w-5" /> : <Lightbulb className="h-5 w-5" />}
              <h3 className="text-xl font-extrabold">{block.title}</h3>
            </div>
            <div className="space-y-3">
              {block.points.map((point) => (
                <p
                  key={point}
                  className={`rounded-2xl p-3 text-sm font-semibold leading-6 ${
                    index === 0 ? "bg-white/12 text-white/88" : "bg-white/70 text-berry/75"
                  }`}
                >
                  {point}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
