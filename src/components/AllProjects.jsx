import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {GetAllProjectsByChapterId,getAllProjectsByCourseId} from '../graphql/Queries'
import { useQuery,useMutation } from "@apollo/client";
import { v4 as uuidv4 } from 'uuid';
import useStore from '../context/useStore'



const AllProjects = () => {
	
	const {currentCourseId}=useStore()
	const token = localStorage.getItem("accessToken");
	console.log(currentCourseId)
	const {data} = useQuery(getAllProjectsByCourseId,{
		variables:{
			courseId: currentCourseId,
		},
		context:{
			headers:{
				Authorization:token
			}
		}
	})

	console.log(data.getAllProjectsByCourseId)


	return <div>
			<table class="table-auto">
  <thead>
    <tr>
      <th className='border border-slate-300'>Project ID</th>
      <th className='border border-slate-300'>Student ID</th>
      <th className='border border-slate-300'>Project Link</th>
      <th className='border border-slate-300'>Project Status</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
		</div>
	
}

export default AllProjects