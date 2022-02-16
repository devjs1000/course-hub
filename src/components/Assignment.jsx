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


      <div className='h-[70vh]  overflow-auto'>
{Children.toArray(
assignments.data.map(a=>{

  return (
    <div className=' w-full  justify-between bg-white my-1 py-2 px-4 w-full items-center text-slate-700'>
<div className='flex items-center gap-5'>
      <div className='border rounded-full p-1 border-[3px]' style={{borderColor:a.assignmentStatus=="submit"?'#84cc16':'#ef4444'}}><img src={a.courseId.image} className='h-12 w-12 rounded-full object-cover' /></div>
      <div>
      <div className='font-bold'>{a.courseId.name}</div>
      <a href={a.assignmentLink} className='text-blue-500 px-2 bg-slate-100 mx-5'>link</a>
      <a href={a.assignmentScreenshotLink} className='text-blue-500 px-2 bg-slate-100 mx-5'>git repository link</a>

      </div>
</div>


<div className='text-xl text-slate-800 font-bold'>Task?</div>
<div className='text-slate-500'>{a.courseId.assignmentQuestion}</div>
 <hr />
  <div>{a.assignmentComment}</div>

</div>

  )
}))
}

      </div>
    </div>
  );
}


export default Assignment;
