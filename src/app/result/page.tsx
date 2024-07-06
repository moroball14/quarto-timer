"use client";

import Link from "@/components/ui/link";
import { RotateWrapper } from "@/components/ui/rotateWrapper";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UnWrappedResult() {
  const searchParams = useSearchParams();
  const flipped = searchParams.get("flipped");
  return (
    <RotateWrapper
      flipped={flipped === "false"}
      className="flex flex-col h-screen"
    >
      <RotateWrapper
        flipped={true}
        className="flex-1 bg-green-500 flex items-center justify-center"
      >
        <h1 className="text-8xl font-bold text-white">Win</h1>
      </RotateWrapper>
      <div className="flex-1 bg-red-500 flex items-center justify-center">
        <h1 className="text-8xl font-bold text-white">Lose</h1>
      </div>
      <Link
        href={"/"}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-card bg-white p-8 rounded-full w-28 h-28 shadow-lg cursor-pointer relative">
          <div className="font-bold text-card-foreground animate-flip absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Restart
          </div>
        </div>
      </Link>
    </RotateWrapper>
  );
}

export default function Result() {
  return (
    <Suspense>
      <UnWrappedResult />
    </Suspense>
  );
}
