import React, { useContext } from "react";
import useStore from "../../context/useStore";

export default ({ name, id, image }) => {
  console.log('name',name);
  console.log('id',id);
  console.log('image',image);
  return (
    <>
      <div className="shadow p-5 h-[20rem] w-[20rem]  rounded">
        <img src={image} />
        <div>{name}</div>
      </div>
    </>
  );
};
