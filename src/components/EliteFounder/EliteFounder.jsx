import React from "react";
import Heading from "../FoundIdea/Heading";
import "./EliteFounder.css";
import EliteFounderCard from "./EliteFounderCard";
export default function EliteFounder() {
  return (
    <div className="mt-24">
      <Heading
        title={`By getting accepted you unlock access to our elite founder network.`}
        subTitle={`Join Persist and gain access to our 400+ millionaire and billionaire startup network.
`}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-4 mt-10">
        <EliteFounderCard />
      </div>
    </div>
  );
}
