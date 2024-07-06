"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const QUARTO_SECONDS = 30;
export default function Timer() {
  const [countdown, setCountdown] = useState(QUARTO_SECONDS);
  // タイマーを上下反転するためのフラグ
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);
  const handleClick = () => {
    setCountdown(QUARTO_SECONDS);
    setFlipped((prevFlipped) => !prevFlipped);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className={`transform ${flipped ? "rotate-180" : ""}`}>
        <div className="flex flex-col items-center gap-8">
          <div
            className="bg-card p-8 rounded-full w-48 h-48 shadow-lg cursor-pointer relative"
            onClick={handleClick}
          >
            <div className="text-8xl font-bold text-card-foreground animate-flip absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {countdown.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="ml-2">
            <Button variant="outline" className="px-4 py-2 bg-black text-white">
              Quarto!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
