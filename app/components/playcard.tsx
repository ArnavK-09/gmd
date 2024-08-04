"use client";
import { Button } from "pixel-retroui";

const EMOJIS = {
  getEmoji: (of: "odd" | "even") => {
    const arr = EMOJIS[of];
    return arr[0];
  },
  odd: ["https://cdn3.emoji.gg/emojis/70790-pepepium.gif"],
  even: ["https://cdn3.emoji.gg/emojis/9756_AppJedi.gif"],
};

export default function PlayCard({
  move,
  onClick,
}: {
  move: "odd" | "even";
  onClick: () => unknown;
}) {
  return (
    <Button
      onClick={onClick}
      bg="transparent"
      className="w-64 md:w-64 aspect-square"
      shadow="#fcd34d"
    >
      <img
        alt={move}
        className="aspect-square w-1/2 m-1 block mx-auto"
        src={EMOJIS.getEmoji(move)}
      />
      <h3 className="text-4xl font-extrabold uppercase">{move}</h3>
      <h3 className="hidden md:block">({move.substring(0, 1)})</h3>
    </Button>
  );
}
