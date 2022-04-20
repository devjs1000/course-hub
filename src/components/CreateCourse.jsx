import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
// import { createCourse } from "../fetch/courseApi";
import useStore from "../context/useStore";
import { createCourseMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { CardImage } from "react-bootstrap-icons";
import { Navigate } from "react-router-dom";
import toast from 'react-hot-toast';


export default () => {
  const { user } = useStore();
  let fileData
  const [formData, setFormData] = useState({});
  const [createCourse,{data}] = useMutation(createCourseMutation);
  const [isImageSelected, setImageSelected] = useState(false);

  const handleFile= async (e)=>{
    const file=e.target.files[0]
    const fileSize = file.size / 1024 / 1024; // in MiB
    if(fileSize>200){
      alert('file size exceeds limit')
    }
    else{
    const reader=new FileReader()
    reader.onload=(f)=>{
    fileData=f.target.result
    let value = fileData
    // console.log(fileData)
    setFormData((val) => ({ ...val, ['video']: value }))
 }
 await reader.readAsDataURL(file);
  
    }
  }

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
    const token = localStorage.getItem("accessToken");
    createCourse({
      headers:{
        Authorization: token
      },
      variables: {
        ...formData,
        teacherId: user.id,
        image:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
    });
    location.reload();
    toast.success('Course Created Successfully!')
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
            icon="ABOUT"
          />
          <FormControl
            type="number"
            onChange={handleNum}
            label="price"
            icon="CURRENCY"
          />
          <div>
            <label htmlFor="video" className='text-gray-500'>Video</label>
           <input type="file" id="video" onChange={handleFile} />
          </div> 
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

                    <input type="file" className="hidden" onChange={handleImage} />
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
