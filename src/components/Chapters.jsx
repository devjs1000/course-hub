import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getChaptersQuery} from '../graphql/Queries'
import { useQuery } from "@apollo/client";
import useStore from '../context/useStore'



const Chapters = () => {

	//make list function
	function makeList(name,video){

	}



	const [chapterList, setChapterList] = useState([]) 
	let {id} = useParams()
	let {user} = useStore()
	const {data:chapters} = useQuery(getChaptersQuery, {
    variables: {
    courseId : id,
    },
  })
console.log(chapters)
	useEffect(() => {
		try{
		let arrayOfItems = chapters.chapters.map(obj=>{
		return <div className=' border-1 border border-black my-4 p-2 pointer'>
		<span className='text-2xl '>{obj.name}</span>
		</div>
	})
	setChapterList(arrayOfItems)			
		}
catch{
	setChapterList('loading....')
}

	}, [chapters])

	return (
		<div className='bg-white min-h-screen p-8'>
			<h1 className='text-4xl font-bold'>Chapters</h1>
		{/* the list of chapters*/}
			<div className="list-decimal text-xl pt-2">
				{chapterList}			</div>
		</div>
	)
}

export default Chapters