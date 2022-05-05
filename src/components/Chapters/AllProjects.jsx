import React,{useState,useEffect,Children} from 'react'
import { useLocation } from 'react-router-dom'
import {GetAllProjectsByChapterId,getAllProjectsByCourseId} from '../../graphql/Queries'
import {checkProjectMutation} from '../../graphql/Mutations'
import { useQuery,useMutation } from "@apollo/client";
import { v4 as uuidv4 } from 'uuid';
import useStore from '../../context/useStore'
import toast from 'react-hot-toast';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    let list=Children.toArray(data?.getAllProjectsByCourseId.map(obj=>{
     return <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{obj.id}</TableCell>
              <TableCell component="th" scope="row">{obj.chapterId}</TableCell>
              <TableCell align="right">{obj.userId}</TableCell>
              <TableCell align="right">
                <a href={obj.projectLink}>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                View Project</button>

                </a>
              </TableCell>
              <TableCell align="right"><button
      className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
      onClick={()=>handleCheck(obj.id,obj.projectStatus)}
      >{
        obj.projectStatus? 'Checked' : 'UnChecked'
      }</button></TableCell>
            </TableRow>
    }))

	return <div>
			<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell>Chapter ID</TableCell>
            <TableCell align="right">Student ID</TableCell>
            <TableCell align="right">Project Link</TableCell>
            <TableCell align="right">Project Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
{list}
        </TableBody>
      </Table>
    </TableContainer>
		</div>
	
}

export default AllProjects