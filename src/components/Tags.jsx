import React, { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState([]);

  const tagStyles = {
    main: "w-96 flex items-center flex-wrap bg-white p-2 rounded-xl",
    tagMain:
      "mr-1 mb-1 flex items-center pl-2 bg-gray-500 text-white rounded-3xl",
    tagBtn:
      "ml-2 px-1 h-fit bg-red-300 text-white hover:bg-red-600 font-bold cursor-pointer",
    tagForm: "w-full",
    tagInput: "w-full border border-red-600 outline-none rounded-md pl-2",
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
          placeholder="Type your tag"
          className={tagStyles.tagInput}
          type="text"
        />
      </form>
    </div>
  );
};

export default Tags;
