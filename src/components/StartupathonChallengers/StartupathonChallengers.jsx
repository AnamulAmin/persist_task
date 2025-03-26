import React from "react";
import Heading from "../FoundIdea/Heading";
import NeighborgoodCard from "./NeighborgoodCard";
import "./StartupathonChallengers.css";

export default function StartupathonChallengers() {
  return (
    <div>
      <Heading
        title={`Completed Startupathon Challenges`}
        subTitle={`People like you have cracked Startupathon challenges and are now leading
        thriving startups.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 mt-10">
        <NeighborgoodCard />
      </div>
    </div>
  );
}
