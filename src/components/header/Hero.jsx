import React, { useState } from "react";
import Button from "../../UI/Button";
import hero from "../../images/hero.svg";

import Chatbot from "./Chatbot";
import useStore from "../../context/useStore";

function Hero() {
  const bluePrint = {
    heading: "Hold on",
    subHeading: "We’re working hard to get you the best experience possible",
    callToAction: "Enroll Now",
  };

  return (
    <section className="flex py-8 flex-col gap-2 items-center px-4 sm:px-8 md:flex-row xl:px-16">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="w-full text-white  flex flex-col items-start gap-6 lg:w-[50%]">
          <h6 className="text-primary-color-light relative uppercase font-semibold text-base after:absolute after:right-[-55%] after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:bg-current after:w-[50%] lg:text-lg">
            Path to your future
          </h6>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            {bluePrint.heading}
          </h1>
          <p className="text-lg lg:text-xl">{bluePrint.subHeading}</p>
          <Button isPrimary={true}>Enroll Now</Button>
        </div>
        <div className="object-cover">
          <img src={hero} alt="" className="block w-full" />
        </div>
      </div>

      <Chatbot />
    </section>
  );
}

export default Hero;
