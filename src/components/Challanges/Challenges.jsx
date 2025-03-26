import React from "react";
import Heading from "../FoundIdea/Heading";
import ChallengesContent from "./ChallengesContent";
import "./challenges.css";
export default function Challenges() {
  return (
    <div className="container mx-auto pt-24" id="ongoing-startupathon">
      <Heading
        title={`Ongoing Startupathon Challenges`}
        subTitle={`Start your journey—tackle live challenges, earn equity, and lead the future.`}
      />

      <ChallengesContent />
    </div>
  );
}
