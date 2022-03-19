import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import { createCourse } from "../../service/fetch/courseApi";
import { uploadImage } from "../../service/fetch/cloudinaryApi";
import { Upload } from "react-bootstrap-icons";
import useStore from "../../service/context/useStore";

const Form = () => {
  const { user } = useStore();
  const [basic, setBasic] = useState({});
  const [advantage, setAdvantage] = useState({});
  const [chapters, setChapters] = useState({});
  const [file, setFile] = useState({});
  const create = (data) => {
    if (file) {
      uploadImage(file, (imgUrl) => {
        console.log(imgUrl);
        // data['image']=imgUrl
        createCourse(
          user._id,
		  data.name,
		  data.tagline,
		  data.type,
		  data.description,
		  data.assignmentQuestion,
		  imgUrl,
          (res) => {
            console.log(res);
          }
        );
      });
    }
  };


  const getBasic = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = {
      ...basic,
    };
    newData[name] = value;
    setBasic(newData);
  };


  const getAdvantage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = {
      ...advantage,
    };
    newData[name] = value;
    setAdvantage(newData);
  };
  const getChapters = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = {
      ...chapters,
    };
    newData[name] = value;
    setChapters(newData);
  };

  const submitData = (e) => {
    e.preventDefault();
    const data = {
      ...basic,
      //   advantages: [advantage],
      //   chapters: [chapters],
    };
    console.log(data);
    create(data);
  };

  const selectFile = (e) => {
    let fileData = e.target.files[0];
    console.log(fileData);
    setFile(fileData);
  };
  const groupClass = "flex flex-col w-full gap-4 sm:flex-row sm:gap-6";
  return (
    <div className="bg-primary-color-dark flex items-center justify-center py-4">
      <div className="relative bg-white w-full mx-3 py-16 flex items-center justify-center rounded-xl sm:w-[60rem]">
        <form className="w-4/5 h-full" onSubmit={submitData}>
          <h2 className="text-center text-4xl font-semibold mb-12 sm:text-left">
            Create Course
          </h2>
          <div className="flex flex-col items-start gap-4 mb-8 sm:gap-6">
            <FormControl
              type="text"
              label="name"
              icon="PERSON"
              onChange={getBasic}
            />

            <div className={groupClass}>
              <FormControl
                type="text"
                label="tagline"
                icon="TAGLINE"
                onChange={getBasic}
              />
              <FormControl
                type="text"
                label="type"
                icon="TYPE"
                onChange={getBasic}
              />
            </div>
            <FormControl
              type="text"
              label="assignmentQuestion"
              icon="QUESTION"
              onChange={getBasic}
            />
            <div className={groupClass}>
              <FormControl
                type="number"
                label="price"
                icon="CURRENCY"
                onChange={getBasic}
              />
              {/* <FormControl
								type="text"
								label="advantage"
								icon="ADVANTAGE"
								onChange={getAdvantage}
							/> */}
            </div>

            {/* <FormControl
							type="text"
							label="chapter-name"
							icon="FILE_NAME"
							onChange={getChapters}
						/> */}
            <div className={groupClass}>
              {/* <FormControl
								type="number"
								label="chapter-number"
								icon="NUM"
								onChange={getChapters}
							/>
							<FormControl
								type="text"
								label="chapter-video-link"
								icon="LINK"
								onChange={getChapters}
							/> */}
            </div>
            <div className={groupClass}>
              {/* <FormControl
								type="text"
								label="chapter-video-desc"
								icon="VIDEO"
								onChange={getChapters}
							/>
							<FormControl
								type="text"
								label="chapter-study-material"
								icon="JOURNAL"
								onChange={getChapters}
							/> */}
            </div>

            <label
              htmlFor="file"
              className="flex justify-center items-center  gap-2 text-slate-700"
            >
              <Upload className="text-slate-800" size={20} />{" "}
              {file?.name || "Upload Image"}
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={selectFile}
            />

            <FormControl
              type="textarea"
              label="description"
              icon="DESC"
              onChange={getBasic}
              rows="5"
            />
          </div>
          <Button type="submit" isWidthFull={true} isPrimary={true}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Form;
