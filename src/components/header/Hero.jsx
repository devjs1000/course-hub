import React from "react";
import heroImg from "../../images/hero-img.png";
import Button from "../../UI/Button";
import rectDesign from "../../images/rect-design.svg";

function Hero() {
  const bluePrint = {
    heading:
      "With our specialized and unparalleled training, get industry-ready with hands-on experience.",
    subHeading:
      "Learn and be proficient with in-demand skills on the go with our short-term (interesting short videos) online trainings. Get certified to enhance your CV which increases your chance to impress a potential employer. Specialize in industry-oriented programs that gets you ready to take on the professional world.",
  };
  return (
    <section className="section-hero z-10 bg-white flex flex-col gap-2 items-center px-4 py-4 relative sm:px-8 md:flex-row md:pt-0 lg:items-start lg:pt-12 xl:pt-16 xl:px-16">
      <div className="flex flex-col items-center gap-4 order-2 xsm:gap-6 md:items-start md:w-1/2 lg:gap-10">
        <h1 className="text-2xl text-center md:text-left lg:text-3xl xl:text-4xl">{bluePrint.heading}</h1>
        <p className="w-full">{bluePrint.subHeading}</p>
        <div className="flex items-center gap-4">
          <Button isPrimary={true}>Start now</Button>
          <Button isOutline={true} textPrimary={true}>
            Find more
          </Button>
        </div>
      </div>
      <img
        src={heroImg}
        alt="image of excited girl"
        className="w-full object-cover mr-16  md:order-2 md:mr-0 md:w-2/4 xl:w-2/4"
      />
      <img
        src={rectDesign}
        alt="rectangualr svg desgin for decoration"
        className="absolute bottom-0 opacity-0 lg:w-60 lg:opacity-100 xl:w-auto"
      />
    </section>
  );
}

export default Hero;
