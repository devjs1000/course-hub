import { useMutation } from "@apollo/client";
import { createCourseMutation } from "../graphql/Mutations";

const CourseHook = () => {
  const token = localStorage.getItem("accessToken");
  const createCourse = async (formData) => useMutation(createCourseMutation,{
    variables: {
      ...formData,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    context : {
      headers:{
        Authorization: token
      }
    }
  });
  return { createCourse };
};

export default CourseHook;
