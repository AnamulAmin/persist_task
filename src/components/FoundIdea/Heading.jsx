import React from "react";

export default function Heading({ title, subTitle }) {
  return (
    <div>
      <h1
        style={{
          opacity: 1,
          transform: `
    translate3d(0px, 0px, 0px)
    scale3d(1, 1, 1)
    rotateX(0deg)
    rotateY(0deg)
    rotateZ(0deg)
    skew(0deg, 0deg)
  `,
          transformStyle: "preserve-3d",
        }}
        className="heading-32 opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-gpu"
      >
        {title}
      </h1>
      <div
        data-w-id="17ac5736-d073-6c66-cec8-d38284ddc9b7"
        style={{
          opacity: 1,
          transform: `
              translate3d(0px, 0px, 0px) 
              scale3d(1, 1, 1) 
              rotateX(0deg) 
              rotateY(0deg) 
              rotateZ(0deg) 
              skew(0deg, 0deg)
            `,
          transformStyle: "preserve-3d",
        }}
        className="sec-subhead how-to-crack-sec opacity-100 transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-gpu transform-style-preserve-3d"
      >
        {subTitle}
      </div>
    </div>
  );
}
