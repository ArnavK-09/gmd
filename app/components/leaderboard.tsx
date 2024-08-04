"use client";

import { Card } from "pixel-retroui";

export default function Leaderboard() {
  return (
    <section className="flex-col gap-5 w-[90%] flex">
      <div className="w-full">
        <strong className="text-xl tracking-wide">Winning Streaks:-</strong>
        <Card className="py-10 px-1 md:px-5 w-full">
          <div className="opacity-90 flex justify-between px-2 md:px-10 font-bold">
            <h4>Streak</h4>
            <h4>Count</h4>
            <h4>%%%</h4>
          </div>
          <Card className="flex justify-between px-2 md:px-10">
            <h4>1 Wins</h4>
            <h4>0983018</h4>
            <h4>139%</h4>
          </Card>
        </Card>
      </div>
      <div className="w-full">
        <strong className="text-xl tracking-wide">Top Picks:-</strong>
        <Card className="py-10 px-1 md:px-5 w-full">
          <div className="opacity-90 flex justify-between px-2 md:px-10 font-bold">
            <h4>Pick</h4>
            <h4>Count</h4>
            <h4>%%%</h4>
          </div>
          <Card className="flex justify-between px-2 md:px-10">
            <h4>Odd</h4>
            <h4>0983018</h4>
            <h4>139%</h4>
          </Card>
          <Card className="flex justify-between px-2 md:px-10">
            <h4>Even</h4>
            <h4>0983018</h4>
            <h4>139%</h4>
          </Card>
        </Card>
      </div>
    </section>
  );
}
