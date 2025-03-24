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

      <div>
        <NeighborgoodCard />
      </div>
    </div>
  );
}
