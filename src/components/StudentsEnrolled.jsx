import React, {useState,useEffect} from 'react'
import useStore from '../context/useStore'
import {useParams} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useQuery,useMutation } from "@apollo/client";
import {GetAllProjectsByChapterId} from '../graphql/Queries'



const StudentsEnrolled = () => {
	let {chapterId} = useParams()
	const {theme} = useStore()
	const [list, setList] = useState()
	const token = localStorage.getItem("accessToken");
	const {data:chapters} = useQuery(GetAllProjectsByChapterId, {
	variables: {
		chapterId : chapterId,
	},
	context : {
		headers:{
			Authorization: token
		}
	}
  })

		console.log(chapters)
		let output;
		const getData = async()=>{
	 output= await chapters.getAllProjectsByChapterId.map(obj=>{
		return <tr className='border-collapse border border-slate-400' key={uuidv4()}>
      <td className="border border-slate-500">{obj.userId}</td>
      <td className="border border-slate-500">
      <a href={obj.projectLink}>
      	<button type="button"
      	className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      	>View Project</button>
      	</a>
			</td>
      <td className="border border-slate-500">
      	{
      		obj.projectStatus? <button
      		type="button"
      		class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      			
      		>Check</button>
      		:
      		<button
      		type="button"
      		class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      		>UnCheck</button>
 
      	}
      </td>
    </tr>

	})
	 setList(output)
		}

		useEffect(() => {
			getData()
			console.log(5)
		}, [])


	const mainDivStyles = `${theme? 'bg-slate-800 text-white' : 'bg-white'} min-h-screen flex flex-col items-center`
	return (
		<div className={mainDivStyles}>
			<h1 className='text-4xl mt-8'>Students Enrolled in: Chapter </h1>
			<table className="table-auto text-3xl mt-8 border-collapse border-collapse border border-slate-400">
  <thead>
    <tr>
      <th className="border border-slate-500">Student ID</th>
      <th className="border border-slate-500">Project Link</th>
      <th className="border border-slate-500">Project Status</th>
    </tr>
  </thead>
  <tbody>
   {list}
  </tbody>
</table>
		</div>
	)
}

export default StudentsEnrolled