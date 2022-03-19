import React from 'react';

const Assignment = ({title, count}) => {
  return (
    <button className='text-red-700 flex gap-2 mx-4'>
      <span>{title}</span><span className='bg-red-700 inline-block grid place-items-center text-white text-sm rounded-full h-[1.5rem] min-w-[1.5rem]'>{count}</span>
    </button>
  );
}


export default Assignment;
