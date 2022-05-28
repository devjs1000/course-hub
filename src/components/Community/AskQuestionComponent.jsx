import React,{useState} from 'react'
// import Search from "../../UI/Search";
import { Plus, Search } from "react-bootstrap-icons";
import useStore from '../../context/useStore'
import QuestionModal from './QuestionModal'
import toast from "react-hot-toast";
import {Link} from 'react-router-dom'

const AskQuestionComponent = ({refetch}) => {
  const {theme} = useStore()
  let [open,setOpen] = useState(false)
  let [submitted,setSubmitted] = useState(false)
  if(submitted==true){
    refetch()
    setSubmitted(false)
  }

	return (
		 <div className=" flex sticky top-0 top-2 py-2 w-full k justify-between px-2 md:px-8">
       <div className='w-full flex'>
         <input type="text" className='h-full border border-1 border-black rounded w-3/4 p-2' 
         placeholder='enter your question'
         />
         <button className=' h-full w-[20%] bg-blue-500 flex justify-center items-center rounded md:w-[10%]'>
<Search size={20} />
         </button>
       </div>
        <button className="flex items-center text-slate-700 border border-2 border-slate-400 px-2 bg-white "
        onClick={()=>{
          console.log();
          if(localStorage.getItem('accessToken')) setOpen(true)
          else{
        toast((t) => (
  <span>
    Please <Link to='/login' className='text-blue-500'>Login</Link> to continue <br/>
    <button onClick={() => toast.dismiss(t.id)}>
      Dismiss
    </button>
  </span>
));
  }
       }}
       
        >
          <Plus className="text-red-700   mx-2" size={30} />
          Ask<span className="text-red-700 mx-1" >?</span>
        </button>
        <QuestionModal open={open} setOpen={setOpen} submitted={setSubmitted}/>
      </div>
	)
}

export default AskQuestionComponent