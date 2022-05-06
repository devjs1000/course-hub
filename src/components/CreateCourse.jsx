import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
// import { createCourse } from "../fetch/courseApi";
import useStore from "../context/useStore";
import { createCourseMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { CardImage } from "react-bootstrap-icons";
import { Select, MenuItem } from "@material-ui/core";
import toast from "react-hot-toast";

export default () => {
  const { user } = useStore();
  let fileData;
  const [formData, setFormData] = useState({
    gst: 18,
    category: " ",
  });
  const [createCourse, { data }] = useMutation(createCourseMutation);
  const [isImageSelected, setImageSelected] = useState(false);

  const categories = [
    "Frontend development",
    "backend development",
    "Machine Learning",
    "Artificial Intelligence",
    "Business Intelligence",
    "Cloud Computing",
  ];

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleArray = (e) => {
    let name = e.target.name;
    let value = e.target.value.split(",");
    value = value.map((val) => val.trim());
    // console.log(value);
    setFormData((val) => ({ ...val, [name]: value }));
  };
  const handleCategory = (e) => {
    let name = "category";
    let value = e.target.value;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleNum = (e) => {
    let name = e.target.name;
    let value = parseInt(e.target.value);
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleImage = (e) => {
    let name = "image";
    let value = e.target.files[0].name;
    setFormData((val) => ({ ...val, [name]: value }));
    setImageSelected(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    createCourse({
      headers: {
        Authorization: token,
      },
      variables: {
        ...formData,
        teacherId: user.id,
        image:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
    });
    //location.reload();
    toast.success("Course Created Successfully!");
  };

  return (
    <>
      <div className="bg-white py-8 px-16">
        <h1 className="mb-4 font-bold text-lg">New Course</h1>
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
            label="tagline"
            icon="TAGLINE"
          />
          <FormControl
            type="text"
            onChange={handleArray}
            label="tags"
            icon="TAGS"
          />

          <div className="flex gap-x-4">
            <FormControl
              type="number"
              onChange={handleNum}
              label="price"
              icon="CURRENCY"
            />
            <div className="min-w-[35%]">
              <FormControl
                type="number"
                onChange={handleNum}
                label="GST"
                icon="GST"
                extra={{
                  disabled: true,
                  value: 18,
                }}
              />
            </div>
          </div>

          <FormControl
            type="textarea"
            onChange={handleChange}
            label="about"
            icon="ABOUT"
            extra={{
              rows: "6",
              cols: "80",
            }}
          />

          <Select
            variant="outlined"
            value={formData.category}
            onChange={handleCategory}
            className="w-full"
          >
            <MenuItem value=" ">Select Catgory</MenuItem>
            {categories.map((category, idx) => {
              return (
                <MenuItem value={category} key={idx}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>

          {/* <Upload className="text-slate-800" size={20} /> */}
          <div className="flex justify-center">
            <div className="rounded-lg bg-white  w-[100%]">
              <div className="mt-2">
                <label className="inline-block mb-2 text-slate-700">
                  Upload Image
                </label>
                <div className="flex  items-center  justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <CardImage className="text-slate-700" size={40} />
                      <p className="pt-1 text-sm tracking-wider text-gray-700 group-hover:text-gray-600">
                        {isImageSelected ? formData.image : "Select a photo"}
                      </p>
                    </div>

                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImage}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" isWidthFull={true} isPrimary={true}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
