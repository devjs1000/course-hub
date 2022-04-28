import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery,useMutation } from "@apollo/client";
import {GetAllProjectsByChapterId} from '../graphql/Queries'
import { v4 as uuidv4 } from 'uuid';


const CurrentProject = () => {
	const [table, setTable] = useState()
	const location = useLocation()
	const { chapterId } = location.state
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

	const getData = async()=>{
		let list = chapters?.getAllProjectsByChapterId.map(obj=>{
		console.log(obj)
		return  <tr key={uuidv4()}>
      <td className='border border-slate-300'>{obj.userId}</td>
      <td className='border border-slate-300'>
      <a href={obj.projectLink}>
      <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">View Project</button>
      </a>
</td>
      <td className='border border-slate-300'><button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">{
      	obj.projectStatus=='unchecked'? 'UnChecked' : 'Checked'
      }</button>
</td>
    </tr>
		})
		setTable(list)
	}

	useEffect(() => {
		getData()
	}, [chapters])

	return (
		<div className=' w-full h-[50rem] flex flex-col items-center'>
<table className="table-auto">
  <thead>
    <tr>
      <th className='border border-slate-300'>Student ID</th>
      <th className='border border-slate-300'>Project Link</th>
      <th className='border border-slate-300'>Project Status</th>
    </tr>
  </thead>
  <tbody>
    {table}
  </tbody>
</table>
		</div>
	)
}

export default CurrentProject