import React from "react";
import Feature from "../../components/Feature/Feature";

function About(props) {
  return (
    <section className="pt-52 px-8 mb-16 text-center text-gray-500">
      <p className="font-semibold md:text-xl">
        Find the right online degree program to elevate your career to the next
        level
        <a href="#" className="link relative text-primary-color-dark ml-4">
          View all courses
        </a>
      </p>
      <h2 className="font-bold my-6 text-3xl sm:text-4xl md:text-5xl">
        What will you get?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-4">
        {props.features.map((a) => {
          return (
            <Feature icon={a.url} title={a.title} content={a.description} />
          );
        })}
      </div>
    </section>
  );
}

export default About;
