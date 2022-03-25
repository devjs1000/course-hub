import React, { useState, useEffect } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
// import { createCourse } from "../fetch/courseApi";
import { uploadImage } from "../fetch/cloudinaryApi";
import { Upload } from "react-bootstrap-icons";
import useStore from "../context/useStore";
import { createProjectMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";

export default () => {
  const {user}=useStore()
  const [formData, setFormData] = useState({});
  const [createCourse] = useMutation(createProjectMutation);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleNum=(e)=>{
    let name = e.target.name;
    let value = parseInt(e.target.value)
    setFormData((val) => ({ ...val, [name]: value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createCourse({ variables: { ...formData, teacherId: user.id, image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }});
  };

  return (
    <>
      <div className="bg-white">
        <form onSubmit={handleSubmit}>
          <FormControl
            onChange={handleChange}
            type="text"
            label="name"
            icon=""
          />
          <FormControl
            onChange={handleChange}
            type="text"
            label="tagline"
            icon=""
          />
          <FormControl type="text"  onChange={handleChange} label="tags" icon="" />
          <FormControl type="text"  onChange={handleChange} label="category" icon="" />
          <FormControl type="text"  onChange={handleChange} label="about" icon="" />
          <FormControl type="number"  onChange={handleNum} label="price" icon="" />

          <Upload className="text-slate-800" size={20} />

          <Button type="submit" isWidthFull={true} isPrimary={true}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
