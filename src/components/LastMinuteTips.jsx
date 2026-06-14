import { CheckCircle2 } from "lucide-react";
import { lastMinuteTips } from "../data/tips.js";

export default function LastMinuteTips() {
  return (
    <section className="section relative z-10">
      <div className="glass rounded-[2rem] p-6 sm:p-8">
        <div className="mb-6">
          <span className="pill">Last-Minute-Matura-Tipps</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-berry">
            Kurz, klar, machbar
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {lastMinuteTips.map((tip) => (
            <div key={tip} className="flex gap-3 rounded-2xl bg-white/70 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-rosewood" />
              <p className="font-semibold leading-7 text-berry/78">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
