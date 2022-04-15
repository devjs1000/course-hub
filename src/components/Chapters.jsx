import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getChaptersQuery} from '../graphql/Queries'
import { useQuery,useMutation } from "@apollo/client";
import useStore from '../context/useStore'
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { projectSubmitMutation } from "../graphql/Mutations";
import toast from 'react-hot-toast';



Modal.setAppElement('#root');
const Chapters = () => {
	/*
	
	id -> courseId
	chapterId -> chapter ID

	*/


	const [submitProject] = useMutation(projectSubmitMutation);
	const [modalData, setModalData] = useState({
		chapterName : '',
		chapterId: ''
	})
	const [isOpen, setIsOpen] = useState(false)
	const [chapterList, setChapterList] = useState([]) 
	let {id} = useParams()
	let {user,theme} = useStore();
	const token = localStorage.getItem("accessToken");
	let fileData;
	const {data:chapters} = useQuery(getChaptersQuery, {
	variables: {
		courseId : id,
	},
	context : {
		headers:{
			Authorization: token
		}
	}
  })

//fn to handle file conversion
const handleSelect= async (e)=>{
const file=e.target.files[0]
const reader=new FileReader()


reader.onload=(f)=>{
 fileData=f.target.result
 }
 await reader.readAsDataURL(file);
}
	
const handleSubmit = (e)=>{
	e.preventDefault()
	const token = localStorage.getItem("accessToken");
	// console.log(fileData)
	submitProject({
		headers:{
        Authorization: token
      },
	variables:{
	  userId: user.id,
      courseId: id,
      projectLink: fileData,
      chapterId: modalData.chapterId,
		}
	})
	toast.promise(
  			submitProject({
	variables:{
	  userId: user.id,
      courseId: id,
      projectLink: fileData,
      chapterId: modalData.chapterId,
		}
	}),{
     		loading: 'Saving...',
     		success: <b>Project Submission Successfully!</b>,
     		error: <b>Project Submission Failed.</b>,
   	}
 )
}


	useEffect(() => {
		try{
		let arrayOfItems = chapters.chapters.map(obj=>{
		let path = `/students-enrolled/dasdasdsdas`
		return <div className=' border-1 border border-black my-4 p-2 cursor-pointer'
		onClick={()=>{
		setIsOpen(true)
		setModalData(prevState=>({
			...prevState,
			chapterName : obj.name,
			chapterId : obj.id
		}))
		}}
		key={uuidv4()}

		>

		<span className='text-2xl '>{obj?.name}</span> <br/>

		</div>
	})
	setChapterList(arrayOfItems)			
		}
catch{
	setChapterList('loading....')
}

	}, [chapters])

let mainDivStyles = `${theme ? 'bg-slate-800 text-white' : 'bg-white'} min-h-screen p-8`
let modalStyles= `flex w-full h-full justify-center items-center ${theme ? 'bg-slate-800 text-white' : 'bg-white'}`
	return (
		<div className={mainDivStyles}>
			<h1 className='text-4xl font-bold'>Chapters</h1>
		{/* the list of chapters*/}
			<div className="list-decimal text-xl pt-2">
				{chapterList}		
			</div>
			<Modal 
			isOpen={isOpen}
			onRequestClose={()=>setIsOpen(false)}
			>
			<div className={modalStyles}>
				<article className=' w-3/4 h-1/2 flex flex-col justify-around'>
				<h2 className='capitalize text-4xl'>Uploading for : {modalData.chapterName}</h2>
				<input type="file" 
				className='border border-1 border-black p-2' 
				onChange={handleSelect}

				 />
				<div className='flex justify-around'>
				<button onClick={()=>setIsOpen(false)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' >I'll Do It Later</button>
				<button
				onClick={(e)=>{
				handleSubmit(e)
				
			
 		setTimeout(()=>{
					setIsOpen(false)
				},3000)
				}}
				 className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded h-12'>Submit</button>
				}
				</div>
			</article>
			</div>
			
			</Modal>
		</div>

	)
}

export default Chapters