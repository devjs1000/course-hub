export default ({ src, title, description, assignment,setter }) => {
  
  const handleSetter=()=>{
    setter({src, title, description, assignment })
  }
  return (
    <>
      <div
        className="w-full relative my-2  bg-white shadow-lg flex flex-wrap justify-between px-4 items-center py-1  rounded-lg overflow-hidden cursor-pointer"
        style={{
          border:status ? " solid 2px rgba(50,200, 50)" : "solid 2px rgba(50,50, 200)",
        }}
        onClick={handleSetter}
      >
        <div className="w-full text-xl p-2">{title}</div>
        <div className="w-full p-2 py-0">{description}</div>
        <div className="w-full text-xs p-2">Projects and Assignments: {assignment}</div>
      </div>
    </>
  );
};
