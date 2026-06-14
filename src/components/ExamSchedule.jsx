import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

export default function ExamSchedule({ exams }) {
  const now = Date.now();

  return (
    <div className="grid gap-2">
      {exams.map((exam) => {
        const isDone = exam.startsAt.getTime() <= now;
        return (
          <div
            key={exam.id}
            className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/65 p-3 shadow-sm"
          >
            {isDone ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-sage" />
            ) : (
              <Circle className="h-5 w-5 shrink-0 text-rosewood/60" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-extrabold text-berry">{exam.subject}</p>
              <p className="text-xs font-semibold text-berry/60">
                15. Juni 2026 um {exam.time}
              </p>
            </div>
            <span className="rounded-full bg-cream px-3 py-1 text-sm font-extrabold text-rosewood">
              {exam.time}
            </span>
          </div>
        );
      })}
    </div>
  );
}
