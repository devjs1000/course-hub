import Modal from "react-modal";
import React,{useState} from 'react'
import SelectCourse from './SelectCourse'
import {createQuestionMutation} from '../../graphql/Mutations'
import {useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const QuestionModal = ({open,setOpen}) => {
  const [course, setCourse] = React.useState("62415210244bfa8e7566abf5");
  const [question, setQuestion] = React.useState("");
  console.log(course)
  let [createQuestion] = useMutation(createQuestionMutation,{
  	context:{
  		headers:{
  			Authorization:localStorage.getItem("accessToken")
  		}
  	}
  })

  const submitQuestion=(e)=>{
  	console.log(question,course)
  	e.preventDefault()
  	// if(question=='' || ' ') return;
  	toast.promise(
 	createQuestion({
 		headers:{
  			Authorization:localStorage.getItem("accessToken")
  		},
  		variables:{
  			courseId: course,
  			question:question
  		}
  	}).then(()=>{
  		setTimeout(()=>{
  			location.reload()
  		},1000)
  	}),
   {
     loading: 'Saving...',
     success: <b>Question Submitted Successfully!</b>,
     error: <b>Please Login And Try Again</b>,
   }
 );
  	
  }
	return (
		<Modal isOpen={open} onRequestClose={() => setOpen(false)} 
		style={{
			overlay:{
			height:'70%'
			}
		}}
		>
		<section className='flex flex-col justify-around h-[20rem]'>
       	Select Course : <SelectCourse course={course} setCourse={setCourse} />
       	Question: 
       	<input type="text" className='border border-1 border-black h-8 p-4 h-14'
       	onChange={(e)=>setQuestion(e.target.value)}
       	value={question}
       	/>
       	<div className='flex w-full'>
       	<button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
       	onClick={()=>setOpen(false)}
       	>Close</button>
		<button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
		onClick={submitQuestion}
		>Submit</button>
       	</div>
		</section>
      </Modal>
	)
}

export default QuestionModal