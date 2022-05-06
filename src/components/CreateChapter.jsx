import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import useStore from "../context/useStore";
import { newCreateChapterMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CreateChapter = () => {
  const { user, theme } = useStore();
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [createChapter] = useMutation(newCreateChapterMutation);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const token = localStorage.getItem("accessToken");
  console.log(token);
  const handleSubmit = (e) => {
    e.preventDefault();
    createChapter({
      variables: {
        ...formData,
        teacherId: user.id,
        courseId: id,
      },
    });

    toast.promise(
      createChapter({
        variables: {
          ...formData,
          teacherId: user.id,
          courseId: id,
        },
      }),
      {
        loading: "Saving...",
        success: <b>Chapter Created!</b>,
        error: <b>Could not create chapter</b>,
      }
    );
  };
  const mainDivStyles = `${
    theme ? "bg-slate-800 text-white" : "bg-white"
  } py-8 px-16`;

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (res) => {
      setFile({
        data: res.target.result,
        originalName: file.name,
        size: file.size,
        type: file.type,
      });
    };
  };

  const handleUpload = () => {};

  return (
    <>
      <div className={mainDivStyles}>
        <nav className="flex gap-12 mb-8 bg-gray-200 text-[20px]">
          <Link to={`/create-chapter/${id}`}>
            <h1 className="pb-2 pt-4 px-4 font-bold border-b-4 border-red-500">
              New Chapter
            </h1>
          </Link>
          <Link to={`/update-discount/${id}`}>
            <h1 className="pb-2 pt-4 font-bold">Update Discount</h1>
          </Link>
        </nav>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormControl
            onChange={handleChange}
            type="text"
            label="name"
            icon="BOOK"
          />
          <div>
            <input type="file" onChange={handleFile} />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUpload}
            >
              Upload Video
            </button>
          </div>
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
