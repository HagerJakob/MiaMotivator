import React from "react";
import { LifeBuoy } from "lucide-react";

export default function StressButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring fixed bottom-4 right-4 z-50 hidden items-center gap-2 rounded-full bg-berry px-5 py-4 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-rosewood sm:bottom-6 sm:right-6 sm:inline-flex"
    >
      <LifeBuoy className="h-4 w-4" />
      Stress?
    </button>
  );
}
