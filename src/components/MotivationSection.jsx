import { HeartHandshake, Star } from "lucide-react";
import { affirmations, lovingMessages } from "../data/tips.js";

export default function MotivationSection() {
  return (
    <section className="section relative z-10">
      <div className="mb-8">
        <span className="pill">
          <HeartHandshake className="h-4 w-4" />
          Motivation
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold text-berry">
          Ein paar Sätze, die du mitnehmen darfst
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {lovingMessages.map((message) => (
          <div key={message} className="glass rounded-3xl p-6">
            <Star className="mb-4 h-5 w-5 fill-honey text-rosewood" />
            <p className="text-lg leading-8 text-berry/78">{message}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] bg-berry p-6 text-white shadow-soft sm:p-8">
        <h3 className="font-display text-3xl font-bold">Warum du das kannst</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {affirmations.map((item) => (
            <div key={item} className="rounded-2xl bg-white/12 p-4 text-base font-semibold leading-7">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
