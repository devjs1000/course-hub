import React, { useState } from "react";
import { Tag } from "react-bootstrap-icons";
const Tags = ({tags, setTags, placeholder, icon}) => {

  const tagStyles = {
    main: " whitespace-nowrap w-full  bg-white p-2 relative rounded-lg py-3 border border-[1px] border-red-400 hover:border-red-800 ",
    tagMain:
      "mr-1 mb-1 flex items-center pl-12 bg-red-400 text-white  rounded py-1",
    tagBtn:
      "ml-2 px-1 h-fit bg-red-300  absolute right-[5rem] text-white hover:bg-red-400 font-bold cursor-pointer",
    tagForm: "w-full",
    tagInput: "w-full  outline-none rounded-md pl-12",
  };

  const addTags = (e) => {
    e.preventDefault();
    const existingTag = tags.find((tag) => tag === e.target[0].value);
    if (existingTag) return alert("Tag already exist");
    const newData = [...tags];
    newData.push(e.target[0].value);
    setTags(newData);
    e.target.reset();
  };
  const removeTags = (id) => {
    const newTags = tags.filter((tag) => tag !== id);
    setTags(newTags);
  };
  return (
    <div className={tagStyles.main}>
      <div className="bg-white absolute top-[50%] translate-y-[-50%] left-[2px] w-[3rem] h-[calc(100%-2px)] flex items-center justify-center rounded-tl-md rounded-bl-md border-r-[1px]">
     {icon}
			</div>
      {tags.map((tag) => (
        <div className={tagStyles.tagMain} key={tag}>
          <p>{tag}</p>
          <p onClick={() => removeTags(tag)} className={tagStyles.tagBtn}>
            X
          </p>
        </div>
      ))}
      <form className={tagStyles.tagForm} onSubmit={addTags}>
        <input
          required
          placeholder={placeholder}
          className={tagStyles.tagInput}
          type="text"
        />
      </form>
    </div>
  );
};

export default Tags;
