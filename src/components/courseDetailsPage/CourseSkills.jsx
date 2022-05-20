import { Children } from "react";

const SkillBadge = ({ tags }) => {
    let tagItem = tags[0].split(',')
  console.log(tagItem)
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap py-4">
      {Children.toArray(
        tagItem?.map((tag) => {
          return (
            <span className="bg-slate-200 py-1 px-3 rounded-full text-gray-800 text-sm">
              {tag}
            </span>
          );
        })
      )}
    </div>
  );
};

function CourseSkills({ tags }) {
  return (
    <section className="text-center border rounded-md p-2 mt-6">
      <h2 className="font-semibold text-md uppercase text-left">
        Skills you will gain
      </h2>

      <SkillBadge tags={tags} />
    </section>
  );
}

export default CourseSkills;
