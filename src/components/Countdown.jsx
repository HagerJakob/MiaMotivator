import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function getRemaining(targetDate) {
  const diff = Math.max(0, targetDate.getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const minutes = Math.floor((diff / 60_000) % 60);
  const seconds = Math.floor((diff / 1_000) % 60);
  return { days, hours, minutes, seconds, done: diff === 0 };
}

export default function Countdown({ targetDate }) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  const items = [
    ["Tage", remaining.days],
    ["Stunden", remaining.hours],
    ["Minuten", remaining.minutes],
    ["Sekunden", remaining.seconds]
  ];

  return (
    <div className="glass rounded-3xl p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-rosewood">
        <Clock className="h-4 w-4" />
        {remaining.done ? "Heute ist dein Tag" : "Countdown bis zur Matura"}
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {items.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white/75 px-3 py-4 text-center">
            <div className="text-2xl font-extrabold text-berry sm:text-3xl">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-xs font-semibold text-berry/60">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
