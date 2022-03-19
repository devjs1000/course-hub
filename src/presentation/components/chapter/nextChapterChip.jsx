export default ({ title, videoLength, status, src, completion, setter }) => {
  
  const handleSetter=()=>{
    setter({title, src, videoLength, status, completion})
  }
  return (
    <>
      <div
        className="w-full relative my-2  bg-white shadow-lg flex justify-between px-4 items-center py-1  rounded-lg overflow-hidden"
        style={{
          border:status ? " solid 2px rgba(50,200, 50)" : "solid 2px rgba(50,50, 200)",
        }}
        onClick={handleSetter}
      >
        <div>{title}</div>
        <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">{videoLength}</div>
        <div
          className="bg-green-500 rounded-full absolute bottom-0 w-full h-3 px-1"
          style={{ width: completion }}
        ></div>
      </div>
    </>
  );
};
