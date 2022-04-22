import React, { useState } from "react";
import Button from "../../UI/Button";
import hero from "../../images/hero.svg";
import { ChatDotsFill, ArrowLeft } from "react-bootstrap-icons";

function Hero() {
  const [chatbotOn, setChatbotOn] = useState(false);
  const bluePrint = {
    heading: "Hold on",
    subHeading: "We’re working hard to get you the best experience possible",
    callToAction: "Enroll Now",
  };

  return (
    <section className="flex py-8 flex-col gap-2 items-center px-4 sm:px-8 md:flex-row xl:px-16 relative">
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
      {!chatbotOn && (
        <span
          className="absolute bottom-8 right-24 text-primary-color-light text-7xl"
          onClick={() => setChatbotOn(true)}
        >
          <ChatDotsFill />
        </span>
      )}
      {chatbotOn && (
        <div className="w-[340px] h-[440px] bg-white fixed bottom-0 right-4 lg:right-16 z-[200] shadow-lg shadow-gray-700">
          <div className="bg-primary-color-light text-white  p-4 font-bold flex">
            <ArrowLeft
              className="text-2xl mr-4 cursor-pointer  hover:text-gray-900"
              onClick={() => setChatbotOn(false)}
            />
            <h3>Agents are online...</h3>
            {/* message here */}
          </div>
          <div className="w-[340px] px-4 py-2 fixed bottom-0 bg-gray-100 border-t-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-transparent"
            />
            <button className="hidden"></button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
