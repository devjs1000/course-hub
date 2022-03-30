import CourseSkills from "../CourseSkills";

function DetailsAbout({ course }) {
  return (
    <section id="about">
      <h2 className="uppercase font-semibold text-lg">About this course</h2>
      <p className="mt-2 ">{course?.about}</p>
      <CourseSkills tags={course?.tags} />
    </section>
  );
}

export default DetailsAbout;
