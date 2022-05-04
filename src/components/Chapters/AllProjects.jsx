import React,{useState,useEffect,Children} from 'react'
import { useLocation } from 'react-router-dom'
import {GetAllProjectsByChapterId,getAllProjectsByCourseId} from '../../graphql/Queries'
import {checkProjectMutation} from '../../graphql/Mutations'
import { useQuery,useMutation } from "@apollo/client";
import { v4 as uuidv4 } from 'uuid';
import useStore from '../../context/useStore'
import toast from 'react-hot-toast';



const AllProjects = () => {
	let [loading,setLoading] = useState(true)
	let currentCourse =localStorage.getItem("currentCourseId")
	const token = localStorage.getItem("accessToken");
	console.log(currentCourse)
	const {data,refetch} = useQuery(getAllProjectsByCourseId,{
		variables:{
			courseId: currentCourse,
		},
		context:{
			headers:{
				Authorization:token
			}
		}
	})

	const [checkProject] = useMutation(checkProjectMutation,{
		onCompleted: refetch,
		context : {
		headers:{
			Authorization: token
		}
	}
	})


	const handleCheck =(projectId,status)=>{
		let newStatus = !status
		console.log(newStatus)
		checkProject({
			headers:{
				Authorization: token
			},
			variables:{
				projectId: projectId,
				projectStatus : newStatus
			}
		})
		toast.promise(
  	checkProject({
			headers:{
				Authorization: token
			},
			variables:{
				projectId: projectId,
				projectStatus : newStatus
			}
		}),
   {
     loading: 'Saving...',
     success: <b>Checking saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
	}

	console.log(data?.getAllProjectsByCourseId)
	console.log(localStorage.getItem("currentCourseId"))
	console.log(token)


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
  {	
  	!data? <div class="text-center">
    <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>

  	:


  	Children.toArray(
  	data?.getAllProjectsByCourseId.map(obj=>{
  		return <tr>
      <td className='border border-slate-300'>{obj.id}</td>
      <td className='border border-slate-300'>{obj.userId}</td>
      <td className='border border-slate-300'><a href={obj.projectLink}>
      <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">View Project</button>
      </a></td>
      <td className='border border-slate-300'><button
      className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
      onClick={()=>handleCheck(obj.id,obj.projectStatus)}
      >{
      	obj.projectStatus? 'Checked' : 'UnChecked'
      }</button>
</td>

    </tr>
  	})
  	)}
  </tbody>
</table>
		</div>
	
}

export default AllProjects