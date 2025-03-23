import React from "react";

export default function Banner() {
  return (
    <div className=" mx-auto w-full h-[400px] relative">
      <div className="team-img-mask z-10"></div>
      <img
        src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
        alt="banner image"
        className="h-[330px] w-full max-w-[1300px] mx-auto grayscale-[100%] contrast-100 "
      />
    </div>
  );
}
