"use client";

import { ProgressBar } from "pixel-retroui";

export default function Streak({ dines, max }: { dines: number; max: number }) {
  return (
    <>
      <strong>Current Streak:- {dines}</strong>
      <ProgressBar
        size="lg"
        color="#fcd34d"
        progress={(dines / max) * 100}
        className="w-[80%] opacity-100"
      />
    </>
  );
}
