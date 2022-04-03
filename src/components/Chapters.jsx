import React from 'react'
import {useParams} from 'react-router-dom'

const Chapters = () => {
	let {id} = useParams()
	return (
		<div className='bg-white h-32 p-8'>
			this is the course {id}
		</div>
	)
}

export default Chapters