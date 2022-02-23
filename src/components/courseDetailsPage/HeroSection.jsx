import { Children } from "react";
import Button from "../../UI/Button";
import sectionHeroImg from "../../images/course-details-hero.jpg";

function HeroSection({ course }) {
  console.log(course);

  return (
    <div
      className="relative  h-auto   w-full overflow-hidden bg-center bg-fixed bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${course?.image})` }}
    >
      <div className="flex flex-wrap w-[30rem]  items-end h-[60vh] sm:w-full backdrop-blur-[100px] px-5 py-8  sm:rounded-xl ">
        <div className="w-full">
		<h1 className="text-4xl  w-full font-bold text-white px-4">
          {course.name}
        </h1>
        <h2 className="text-xl  w-full text-white px-4">{course.tagline}</h2>

		</div>

        <div className=" gap-2 mx-4 ">
          <Button isPrimary={true}>enroll</Button>
          <Button>learn more</Button>
		  <div className=" my-4 w-full">
			{Children.toArray(course?.advantages?.map(a=>{
				return <button className="bg-white m-1 px-2 text-slate-700">{a.advantageName}</button>
			}))}
		</div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
