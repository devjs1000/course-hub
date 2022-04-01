import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import useStore from "../context/useStore";
import { createChapterMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

const CreateChapter = () => {
  const { user } = useStore();
  const { id } = useParams();

  const [formData, setFormData] = useState({});
  const [createChapter] = useMutation(createChapterMutation);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createChapter({
      variables: {
        ...formData,
        teacherId: user.id,
        courseId: id,
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
            icon="BOOK"
          />
          <FormControl
            onChange={handleChange}
            type="text"
            label="video"
            icon="VIDEO"
          />
          <FormControl
            type="text"
            onChange={handleChange}
            label="about"
            icon="ABOUT"
          />
          <FormControl
            type="text"
            onChange={handleChange}
            label="project"
            icon="PROJECT"
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
