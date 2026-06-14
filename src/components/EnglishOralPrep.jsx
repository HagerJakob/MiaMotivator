import React from "react";
import { Languages, MessageCircle, Star } from "lucide-react";
import { englishSpeakingStarters, englishTopics } from "../data/tips.js";

export default function EnglishOralPrep() {
  return (
    <section id="englisch" className="section relative z-10">
      <div className="glass rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-8">
        <div className="mb-6">
          <span className="pill">
            <Languages className="h-4 w-4" />
            Kurzer Englisch-Check um 14:00
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-berry sm:text-4xl">
            Englisch ist der kurze Vorlauf. P&P bleibt der Hauptfokus.
          </h2>
          <p className="mt-3 text-base leading-7 text-berry/75 sm:text-lg">
            Für Englisch reicht hier ein ruhiger Speaking-Plan: Meinung,
            Beispiel, Gegensatz, Schluss. Danach darf dein Kopf wieder ganz zu
            Psychologie und Philosophie zurück.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {englishTopics.map((item) => (
            <article
              key={item.topic}
              className={`rounded-3xl p-4 ${
                item.preferred ? "bg-white/80 text-berry ring-2 ring-blush/60" : "bg-white/60 text-berry"
              }`}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-lg font-extrabold">{item.topic}</h3>
                {item.preferred && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blush/35 px-3 py-1 text-xs font-bold text-rosewood">
                    <Star className="h-3.5 w-3.5 fill-honey text-rosewood" />
                    bevorzugt
                  </span>
                )}
              </div>
              <p className="text-sm leading-6 text-berry/68">
                {item.prompts.join(" · ")}
              </p>
              <p className="mt-4 rounded-2xl bg-cream p-3 text-sm font-semibold leading-6">
                {item.starter}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl bg-cream/85 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2 font-extrabold text-berry">
            <MessageCircle className="h-5 w-5" />
            Sichere Satzstarter
          </div>
          <div className="flex flex-wrap gap-2">
            {englishSpeakingStarters.map((starter) => (
              <span
                key={starter}
                className="rounded-full bg-white/80 px-3 py-2 text-sm font-bold text-rosewood"
              >
                {starter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
