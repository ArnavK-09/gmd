"use client";

import { useCallback, useEffect, useState } from "react";
import Divider from "./components/Divider";
import Leaderboard from "./components/leaderboard";
import PlayCard from "./components/playcard";
import Result from "./components/Result";
import Streak from "./components/Streak";

function App() {
  const TARGET_STREAK = 20;

  const [choosenNumber, setChoosenNumber] = useState<number>(1);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [userStreak, setUserStreak] = useState<number>(0);
  const [lastMoveChoosenByUser, setLastMoveChoosenByUser] = useState<
    "odd" | "even" | null
  >(null);
  useEffect(() => {
    setChoosenNumber(Math.floor(Math.random() * 1000));
  }, []);

  const purposeNumber = (choosen: "odd" | "even") => {
    setShowResult(false);
    setLastMoveChoosenByUser(choosen);
    const stateOfNumberDecided = choosenNumber % 2 == 0 ? "even" : "odd";
    const wState = stateOfNumberDecided == choosen ? "Win" : "Loose";

    if (wState == "Win") {
      setUserStreak(userStreak + 1);
    }
    setShowResult(true);
    if (wState == "Loose") {
      setUserStreak(0);
    }
  };

  const handleKeyPress = useCallback((event: any) => {
    if (event.key == "o") {
      purposeNumber("odd");
    }
    if (event.key == "e") {
      purposeNumber("even");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      {showResult && (
        <Result
          streak={userStreak}
          onClose={() => {
            setShowResult(false);
            setChoosenNumber(Math.floor(Math.random() * 1000));
          }}
          choosenByUser={lastMoveChoosenByUser as "odd" | "even"}
          numberChoosen={choosenNumber}
        />
      )}
      <section className="min-h-screen w-screen overflow-x-hidden grid place-items-center text-center">
        <div className="w-auto mx-auto block">
          <div>
            <h1 className="my-14 text-5xl md:text-7xl tracking-wide font-bold">
              Odd
              <br /> Or
              <br /> Even
              <br /> ???
            </h1>
          </div>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <PlayCard onClick={() => purposeNumber("odd")} move="odd" />
            <PlayCard onClick={() => purposeNumber("even")} move="even" />
          </div>
        </div>
        <div className="w-[90%] block mx-auto text-center">
          <div>
            <h1 className="my-14 text-2xl md:text-5xl tracking-wide font-bold underline">
              Your Streak!
            </h1>
          </div>
          <div className="grid place-items-center">
            <Streak max={TARGET_STREAK} dines={userStreak} />
          </div>
        </div>
        <Divider />
        <div className="w-[90%] block mx-auto text-center">
          <div>
            <h1 className="my-14 text-3xl underline md:text-6xl tracking-wide font-bold">
              Leaderboard!
            </h1>
          </div>
          <div className="grid place-items-center mx-auto">
            <Leaderboard />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
