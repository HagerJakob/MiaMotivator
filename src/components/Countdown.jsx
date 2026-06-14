import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function getNextExam(exams) {
  const now = Date.now();
  return exams.find((exam) => exam.startsAt.getTime() > now) ?? exams[exams.length - 1];
}

function getRemaining(exams) {
  const nextExam = getNextExam(exams);
  const diff = Math.max(0, nextExam.startsAt.getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const minutes = Math.floor((diff / 60_000) % 60);
  const seconds = Math.floor((diff / 1_000) % 60);
  const allDone = exams.every((exam) => exam.startsAt.getTime() <= Date.now());
  return { days, hours, minutes, seconds, allDone, nextExam };
}

export default function Countdown({ exams }) {
  const [remaining, setRemaining] = useState(() => getRemaining(exams));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining(exams)), 1000);
    return () => window.clearInterval(timer);
  }, [exams]);

  const items = [
    ["Tage", remaining.days],
    ["Stunden", remaining.hours],
    ["Minuten", remaining.minutes],
    ["Sekunden", remaining.seconds]
  ];

  return (
    <div className="glass rounded-[1.5rem] p-4 sm:rounded-3xl sm:p-5">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-bold text-rosewood">
        <Clock className="h-4 w-4" />
        {remaining.allDone
          ? "Du hast beide Prüfungen erreicht"
          : `Countdown bis ${remaining.nextExam.label} um ${remaining.nextExam.time}`}
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {items.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white/75 px-2 py-3 text-center sm:px-3 sm:py-4">
            <div className="text-xl font-extrabold text-berry min-[380px]:text-2xl sm:text-3xl">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[0.68rem] font-semibold text-berry/60 sm:text-xs">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
