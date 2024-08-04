"use client";
import { Card, Button } from "pixel-retroui";

export default function Navbar() {
  return (
    <Card
      bg="#fff"
      textColor="black"
      borderColor="black"
      shadowColor="#fcd34d"
      className="w-[90vw] text-center fixed top-5 z-30"
    >
      <div className="w-full flex justify-between items-center">
        <div>logo</div>
        <div>
          <Button
            bg="#fcd34d"
            textColor="black"
            shadow="black"
            borderColor="black"
            className="flex align-middle"
          >
            <img
              alt="star"
              src="https://cdn3.emoji.gg/emojis/38270-cute-bow.gif"
              className="mr-2 apect-square h-6"
            />
            Give A Star!
          </Button>
        </div>
      </div>
    </Card>
  );
}
