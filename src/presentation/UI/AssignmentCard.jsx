
export default ({ assignments }) => {
  const assignmentPrint = {
    title: "My Assignments",
  };

  return (
    <div>
      <div className=" w-full  justify-between bg-white my-1 py-2 px-4 w-full items-center text-slate-700">
        <div className="flex items-center gap-5">
          <div
            className="border rounded-full p-1 border-[3px]"
            style={{
              borderColor:
                assignments.assignmentStatus == "submit" ? "#84cc16" : "#ef4444",
            }}
          >
            <img
              src={assignments.courseId.image}
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-bold">{assignments.courseId.name}</div>
            <a
              href={assignments.assignmentLink}
              className="text-blue-500 px-2 bg-slate-100 mx-5"
            >
              link
            </a>
            <a
              href={assignments.assignmentScreenshotLink}
              className="text-blue-500 px-2 bg-slate-100 mx-5"
            >
              git repository link
            </a>
          </div>
        </div>

        <div className="text-xl text-slate-800 font-bold">Task?</div>
        <div className="text-slate-500">{assignments.courseId.assignmentQuestion}</div>
        <hr />
        <div>{assignments.assignmentComment}</div>
      </div>
    </div>
  );
};

