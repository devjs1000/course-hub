import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import useStore from "../context/useStore";
import { createCourseMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";

const CreateChapter = () => {
  const { user } = useStore();

  const [formData, setFormData] = useState({});
  const [createCourse] = useMutation(createCourseMutation);
  const [isImageSelected, setImageSelected] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({
      variables: {
        ...formData,
        teacherId: user.id,
        // image:
        //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
    });
  };

  return (
    <>
      <div className="bg-white py-8 px-16">
        <h1 className="mb-4 font-bold text-lg">New Chapter</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormControl
            onChange={handleChange}
            type="text"
            label="name"
            icon=""
          />
          <FormControl
            onChange={handleChange}
            type="text"
            label="description"
            icon="TAGLINE"
          />
          <FormControl
            type="text"
            onChange={handleChange}
            label="tags"
            icon="TAGS"
          />
          <FormControl
            type="text"
            onChange={handleChange}
            label="category"
            icon=""
          />
          <FormControl
            type="text"
            onChange={handleChange}
            label="about"
            icon=""
          />

          <Button type="submit" isWidthFull={true} isPrimary={true}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateChapter;
