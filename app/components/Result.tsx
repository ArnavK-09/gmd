"use client";

import { Card, Popup } from "pixel-retroui";

export default function Result({
  numberChoosen = 1,
  choosenByUser,
  onClose,
  streak,
}: {
  streak: number;
  numberChoosen?: number;
  choosenByUser: "odd" | "even";
  onClose: () => unknown;
}) {
  const stateOfNumberDecided = numberChoosen % 2 == 0 ? "even" : "odd";
  const wState = stateOfNumberDecided == choosenByUser ? "Win" : "Loose";
  return (
    <>
      <Popup
        isOpen={true}
        onClose={onClose}
        bg="#fefcd0"
        baseBg="#fcd34d"
        textColor="black"
        borderColor="black"
        className="px-15 "
      >
        <div className="w-full md:px-16 text-center py-5">
          <h2 className="text-4xl uppercase underline font-bold mb-6">
            You {wState}!
          </h2>
          <strong>Number was:-</strong>
          <Card className="p-0" bg="#fefcd0" shadowColor="#fcd34d">
            <h3 className="text-7xl my-5 font-extrabold">
              {numberChoosen ?? 1}
            </h3>
          </Card>
          <h4 className="mt-6 font-semibold text-xl">
            {wState == "Loose"
              ? "Streak Reset..."
              : `Current Streak: ${streak}`}
          </h4>
          <h6 className="font-semibold text-sm tracking-wide leading-snug opacity-90 mt-5">
            You Choose: {choosenByUser}
            <br />
            Have to Choose: {stateOfNumberDecided}
          </h6>
        </div>
      </Popup>
    </>
  );
}
