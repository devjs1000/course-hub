import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
// import { createCourse } from "../fetch/courseApi";
import { uploadImage } from "../fetch/cloudinaryApi";
import { Upload } from "react-bootstrap-icons";
import useStore from "../context/useStore";
import { createCourseMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { CardImage } from "react-bootstrap-icons";

export default () => {
  const { user } = useStore();
  const [formData, setFormData] = useState({});
  const [createCourse] = useMutation(createCourseMutation);
  const [isImageSelected, setImageSelected] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
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
            label="tagline"
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
          <FormControl
            type="number"
            onChange={handleNum}
            label="price"
            icon="CURRENCY"
          />

          {/* <Upload className="text-slate-800" size={20} /> */}
          <div class="flex justify-center">
            <div class="rounded-lg bg-white  w-[100%]">
              <div class="mt-2">
                <label class="inline-block mb-2 text-slate-700">
                  Upload Image
                </label>
                <div class="flex  items-center  justify-center w-full">
                  <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                      <CardImage className="text-slate-700" size={40} />
                      <p class="pt-1 text-sm tracking-wider text-gray-700 group-hover:text-gray-600">
                        {isImageSelected ? formData.image : "Select a photo"}
                      </p>
                    </div>
                    <input type="file" class="hidden" onChange={handleImage} />
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
