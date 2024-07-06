"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "@/components/ui/link";
import { RotateWrapper } from "@/components/ui/rotateWrapper";

const QUARTO_SECONDS = 30;
export default function Timer() {
  const [countdown, setCountdown] = useState(QUARTO_SECONDS);
  const [flipped, setFlipped] = useState(false);
  const [showQuartoOverlay, setShowQuartoOverlay] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && !showQuartoOverlay) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown, showQuartoOverlay]);

  const handleClick = useCallback(() => {
    setCountdown(QUARTO_SECONDS);
    setFlipped((prevFlipped) => !prevFlipped);
  }, []);

  const handleQuarto = useCallback(() => {
    setShowQuartoOverlay(true);
  }, []);

  return (
    <RotateWrapper flipped={flipped}>
      <div className="flex items-center justify-center h-screen bg-background">
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
            <Button
              variant="outline"
              className="px-4 py-2 bg-black text-white"
              onClick={handleQuarto}
            >
              Quarto!
            </Button>
          </div>
        </div>
      </div>
      {showQuartoOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-card p-8 rounded-lg text-card-foreground text-4xl font-bold text-white">
            Quarto, OK?
          </div>
          <div className="flex items-center gap-2">
            <Link href={{ pathname: "/result", query: { flipped } }}>
              <div className="px-4 py-2 bg-white text-white rounded-lg">👍</div>
            </Link>
            <Button
              variant="solid"
              className="px-4 py-2 bg-white text-white"
              onClick={() => {
                setShowQuartoOverlay(false);
                handleClick();
              }}
            >
              👎
            </Button>
          </div>
        </div>
      )}
    </RotateWrapper>
  );
}
