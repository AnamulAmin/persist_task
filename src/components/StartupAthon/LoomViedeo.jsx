import React from "react";

const LoomVideo = () => {
  return (
    <div className="max-w-[800px] mx-auto border-2 border-secondary p-7 rounded-lg">
      <iframe
        src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde"
        frameBorder="0"
        allowFullScreen
        width="100%"
        height="550"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default LoomVideo;
