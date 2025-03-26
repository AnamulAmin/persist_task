import React from "react";
import ChallengesCard from "./ChallengesCard";

export default function ChallengesContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6 mb-20">
      <ChallengesCard />
      <ChallengesCard />
      <ChallengesCard />
    </div>
  );
}
