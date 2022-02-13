import React from 'react';
import CountButton from '../UI/CountButton'
import Search from '../UI/Search'
import {ArrowClockwise} from 'react-bootstrap-icons';
const Assignment = ({}) => {
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
<div>Name of Task</div>
<div>Course</div>
  <div>Status</div>

</div>

<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>
<div className='flex justify-between bg-white  py-2 my-1 px-4 w-full items-center text-slate-600'>
  <div>Name of Task</div>
  <div>Course</div>
    <div>Status</div>
</div>

      </div>
    </div>
  );
}


export default Assignment;
