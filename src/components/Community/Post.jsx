import { Children, useState } from "react";
import Button from "../../UI/Button";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import { Plus, Chat } from "react-bootstrap-icons";
const Category = ({question, answers, category}) => {
const [show, setShow]=useState(false)
const handleShow=()=>{
  show?setShow(false):setShow(true)
}
return (
  <div className='bg-white py-2 px-4 my-2'>
<div className='text-slate-800 font-semibold'>{question}</div>
<div className='bg-slate-100 inline-block px-4 my-2 text-slate-500'>{category}</div>
  <div className='text-red-700'>
    <Chat className='cursor-pointer' onClick={handleShow} />
    <div className='m-2'>
    {show &&
      <>
      <input className='bg-slate-50 py-1 px-2'  placeholder='answer the question'/>
      {
      Children.toArray(
        answers.map(a=>{
          return <div className='my-2 py-2 px-2 text-slate-800 border border-[2px] border-slate-200 '>
            {a}
          </div>
        })
      )}
      </>
    }
  </div>

  </div>

  </div>
)

};

export default Category;
