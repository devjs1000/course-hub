import React from 'react'
import useStore from '../context/useStore'
import {useParams} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useQuery,useMutation } from "@apollo/client";
import {getChaptersQuery} from '../graphql/Queries'



const StudentsEnrolled = () => {
	const {theme} = useStore()
	const token = localStorage.getItem("accessToken");
	const fakeIds = [{name:'rohan', id:98}, {name :'rohit',id:48}, {name: 'shweta',id:28}]
	let output=fakeIds.map(obj=>{
		return <tr className='border-collapse border border-slate-400' key={uuidv4()}>
      <td className="border border-slate-500">{obj.name}</td>
      <td className="border border-slate-500">{obj.id}</td>
      <td className="border border-slate-500">pending</td>
    </tr>

	})
	const mainDivStyles = `${theme? 'bg-slate-800 text-white' : 'bg-white'} min-h-screen flex flex-col items-center`
	return (
		<div className={mainDivStyles}>
			<h1 className='text-4xl mt-8'>Students Enrolled in: Chapter </h1>
			<table className="table-auto text-3xl mt-8 border-collapse border-collapse border border-slate-400">
  <thead>
    <tr>
      <th className="border border-slate-500">Student Name</th>
      <th className="border border-slate-500">Student ID</th>
      <th className="border border-slate-500">Project Status</th>
    </tr>
  </thead>
  <tbody>
   {output}
  </tbody>
</table>
		</div>
	)
}

export default StudentsEnrolled