import React from "react";
import "./GetIdea.css";

export default function GetIdea() {
  return (
    <section className="w-fit mx-auto">
      <div className="page-padding">
        <div className="container-large">
          <div
            id="past-startupathon"
            data-w-id="81d8cffc-d1d4-c0c1-9127-7782e564f8cd"
            style={{ opacity: 1 }}
            className="fellowship-content-wrap"
          >
            <h2 className="fellowship-head">Got an idea of your own?</h2>
            <h3 className="fellowship-subhead">
              We are always on the lookout for visionaries with great startup
              ideas, ready to become successful founders. If that’s you, apply
              below for our Fellowship program.
            </h3>
            <a
              href="/startupathon-fellowship"
              target="_blank"
              className="fellowship-cta-on-startupathon w-button"
            >
              Apply For Fellowship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
