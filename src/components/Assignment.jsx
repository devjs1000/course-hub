import React, {Children} from 'react';
import CountButton from '../UI/CountButton'
import Search from '../UI/Search'
import {ArrowClockwise} from 'react-bootstrap-icons';
import useStore from '../context/useStore'
const Assignment = ({}) => {

  const {assignments}=useStore()
  console.log(assignments);
  return (
    <div className='bg-slate-100 h-[85vh]'>
      <h1 className='p-4 text-4xl sm:text-6xl font-bold text-center text-slate-700 '>My Assignments</h1>
      <div className='flex mx-[0rem] sm:mx-[2rem] sm:mx-[4rem] sm:mx-[6rem]'>
        <CountButton title={'All'} count={0} />
        <CountButton title={'Un Checked'} count={0} />
        <CountButton title={'Checked'} count={0} />
      </div>
      <div className='my-4 flex justify-center bg-white py-3'>
<Search placeholder='Search your tasks' />
<ArrowClockwise className='bg-red-700 text-white w-[2rem] mx-1 hover:text-red-700 hover:bg-white transition-all h-[2rem] p-1' />
      </div>

      <div className='h-[70vh] overflow-y-scroll'>
<div className='flex justify-between bg-white my-1 py-2 px-4 w-full items-center text-slate-700'>
<div>Program Code</div>
<div>Course Name</div>
  <div>Course Code</div>
  <div>Last Date</div>
  <div>Actions</div>

</div>

{Children.toArray(
assignments.data.map(a=>{

  return (
    <div className='flex justify-between bg-white my-1 py-2 px-4 w-full items-center text-slate-700'>
      <div><img src={a.courseId.image} className='h-12 w-12 rounded-full object-cover' /></div>
<div><a href={a.assignmentLink} className='text-blue-700'>link</a></div>
<div><a href={a.assignmentLink} className='text-blue-700'>git repository link</a></div>
<div>{a.courseId.name}</div>
  <div></div>
  <div>Last Date</div>
  <div>Actions</div>

</div>

  )
}))
}

      </div>
    </div>
  );
}


export default Assignment;
