import { Children, useEffect, useState } from "react";
import CountButton from "../../UI/CountButton";
import Category from "./Category";
import Post from "./Post";
import useStore from '../../context/useStore'
import axios from "axios";
import {allQuestionsQuery} from '../../graphql/Queries'
import { useQuery,useMutation } from "@apollo/client";
import AskQuestionComponent from './AskQuestionComponent'
import BoxLoading from "../../UI/BoxLoading";

const Community = () => {
  const {allCoursesData,theme} = useStore()
  const {posts} = useStore()
  const token = localStorage.getItem("accessToken");
  const {data: ques,loading,error,refetch} = useQuery(allQuestionsQuery,{
    context : {
    headers:{
      Authorization: token
    }
  }
  })
  
  const mainContainerStyles = `${
    theme ? "bg-slate-800 text-white" : "bg-white"
  } bg-slate-100 min-h-screen `

if(loading) return <div className='flex items-center justify-center'>
   <BoxLoading/>
</div>
 
if(error) return 'Oops! Something wrong happened. Please contact support'
  return (
    <div className={mainContainerStyles}>
     <AskQuestionComponent refetch={refetch}/>
      <div className="grid h-auto w-full gap-4 mt-4 rounded-sm">
        <div className="col-span-4 mb-4 ">
          {Children.toArray(
            ques?.questions.map((obj) => {
              return (
                <Post
                  id={obj.id}
                  question={obj.question}
                  category="Frontend"
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
