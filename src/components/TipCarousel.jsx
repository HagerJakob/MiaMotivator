import { useEffect, useMemo, useState } from "react";
import { Bookmark, BookmarkCheck, RefreshCcw } from "lucide-react";
import { tipCategories, tips } from "../data/tips.js";

const storageKey = "mia-motivator-favorites";

export default function TipCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState("Alle");
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) ?? [];
    } catch {
      return [];
    }
  });

  const visibleTips = useMemo(() => {
    if (category === "Alle") return tips;
    return tips.filter((tip) => tip.category === category);
  }, [category]);

  const activeTip = visibleTips[activeIndex % visibleTips.length] ?? tips[0];
  const isFavorite = favorites.includes(activeTip.id);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const delay = 10_000 + Math.round(Math.random() * 10_000);
    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % visibleTips.length);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [activeIndex, visibleTips.length]);

  useEffect(() => {
    setActiveIndex(0);
  }, [category]);

  const nextTip = () => setActiveIndex((index) => (index + 1) % visibleTips.length);

  const toggleFavorite = () => {
    setFavorites((current) =>
      current.includes(activeTip.id)
        ? current.filter((id) => id !== activeTip.id)
        : [...current, activeTip.id]
    );
  };

  return (
    <section id="tipps" className="section relative z-10">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="pill">Tipp-Karten aus den Unterlagen</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-berry">
            Kleine Hinweise, die sofort helfen
          </h2>
        </div>
        <div className="text-sm font-semibold text-berry/65">
          {favorites.length} Favorit{favorites.length === 1 ? "" : "en"} gespeichert
        </div>
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
        {["Alle", ...Object.values(tipCategories)].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`focus-ring whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
              category === item
                ? "bg-berry text-white shadow-soft"
                : "bg-white/70 text-berry hover:bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <article className="glass rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood/70">
              {activeTip.category}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-berry">
              {activeTip.title}
            </h3>
          </div>
          <span className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-berry/70">
            {activeTip.source}
          </span>
        </div>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-berry/78">{activeTip.text}</p>
        <div className="mt-6 rounded-3xl bg-white/70 p-5">
          <p className="text-sm font-bold text-rosewood">Merksatz</p>
          <p className="mt-1 text-xl font-extrabold text-berry">{activeTip.remember}</p>
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={nextTip}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-berry px-5 py-3 font-bold text-white transition hover:bg-rosewood"
          >
            <RefreshCcw className="h-4 w-4" />
            Nächster Tipp
          </button>
          <button
            type="button"
            onClick={toggleFavorite}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white/75 px-5 py-3 font-bold text-berry transition hover:bg-white"
          >
            {isFavorite ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            {isFavorite ? "Gespeichert" : "Als Favorit merken"}
          </button>
        </div>
      </article>
    </section>
  );
}
