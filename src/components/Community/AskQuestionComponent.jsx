import React,{useState} from 'react'
import Search from "../../UI/Search";
import { Plus } from "react-bootstrap-icons";
import useStore from '../../context/useStore'
import QuestionModal from './QuestionModal'
import toast from "react-hot-toast";
import {Link} from 'react-router-dom'

const AskQuestionComponent = () => {
  const {theme} = useStore()
  let [open,setOpen] = useState(false)
  console.log(open)
	return (
		 <div className=" px-4 flex sticky top-0 py-1">
        <Search placeholder="search your answers" />
        <button className="flex items-center text-slate-700  border-[2px] border-slate-100 px-2 bg-white"
        onClick={()=>{
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
        <QuestionModal open={open} setOpen={setOpen} />
      </div>
	)
}

export default AskQuestionComponent