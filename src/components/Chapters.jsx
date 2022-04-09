import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getChaptersQuery} from '../graphql/Queries'
import { useQuery } from "@apollo/client";
import useStore from '../context/useStore'
import Modal from 'react-modal';

Modal.setAppElement('#root');
const Chapters = () => {
	const [modalData, setModalData] = useState({
		chapterName : ''
	})
	const [isOpen, setIsOpen] = useState(false)
	const [chapterList, setChapterList] = useState([]) 
	let {id} = useParams()
	let {user,theme} = useStore();
	const token = localStorage.getItem("accessToken");
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
console.log(chapters)
	useEffect(() => {
		try{
		let arrayOfItems = chapters.chapters.map(obj=>{
		return <div className=' border-1 border border-black my-4 p-2 cursor-pointer' onClick={()=>{
		setIsOpen(true)
		setModalData(prevState=>({
			...prevState,
			chapterName : obj.name,
		}))
		}}>
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
				<input type="file" className='border border-1 border-black p-2' />
				<div className='flex justify-around'>
				<button onClick={()=>setIsOpen(false)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' >I'll Do It Later</button>
				<button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded h-12'>Submit</button>
				</div>
			</article>
			</div>
			
			</Modal>
		</div>

	)
}

export default Chapters