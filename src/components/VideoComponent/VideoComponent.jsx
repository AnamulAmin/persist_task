import React from "react";

export default function VideoComponent({ title, subTitle, src }) {
  return (
    <div className="mt-8">
      {title && (
        <h1 className="magic-text text-center  heading-41 font-bold w-full max-w-[800px] mx-auto">
          {title}
        </h1>
      )}
      {subTitle && (
        <p
          className={`text-center font-semibold ${
            title ? "text-2xl" : "text-3xl"
          }  mt-0 mb-7 max-w-[950px] mx-auto`}
        >
          {subTitle}
        </p>
      )}
      <div className="max-w-[700px] mx-auto border-2 border-secondary p-7 rounded-lg">
        <iframe
          src={src}
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="550"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
}
