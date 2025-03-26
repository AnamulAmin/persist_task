import React from "react";
import Heading from "./Heading";
import FoundIdeaContent from "./FoundIdeaContent";
import "./FoundIdea.css";
export default function FoundIdea() {
  return (
    <section id="startupathon-guide" className="pt-24">
      <Heading
        title={`Found an idea that matches your skills?`}
        subTitle={` Here’s a simple guide on how the Startupathon process works once you
    find a project idea that suits your skills.`}
      />
      <FoundIdeaContent />
    </section>
  );
}
