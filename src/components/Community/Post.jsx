import { Children, useState } from "react";
import Button from "../../UI/Button";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import { Plus, Chat } from "react-bootstrap-icons";
import useStore from "../../context/useStore";
import {getAnswerQuery} from '../../graphql/Queries'
import {createAnswerMutation} from '../../graphql/Mutations'
import { useQuery,useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const Category = ({ question, category,id }) => {
  const {posts,setPosts} = useStore()
  const [show, setShow] = useState(false);
  const [ans, setAns] = useState('');
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  const token = localStorage.getItem("accessToken");
 const {data: answer,loading,error} = useQuery(getAnswerQuery,{
    variables :{
      questionId: id
    },
    context : {
    headers:{
      Authorization: token
    }
  }
  })

 const [createAnswer] = useMutation(createAnswerMutation, {
    variables: {
      questionId:id
    },
    context: {
      headers: {
        Authorization: token,
      },
    },
    refetchQueries:[getAnswerQuery]
  });



if(loading) return 'loading...'
  const submitAnswer = e=>{
    e.preventDefault()
    toast.promise(
  createAnswer({
    variables:{
      questionId:id,
      answer:ans
    }
  }).then(()=>setAns('')),
   {
     loading: 'Saving...',
     success: <b>Answer Submitted!</b>,
     error: <b>Something wrong occured</b>,
   }
 );
  }

let list = Children.toArray(answer?.answer.map(a=>{
  return <div className="flex items-start mt-3">
        <div>
          <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-green-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>
        <p className="ml-4 md:ml-6 text-gray-800">
         {a.answer}
        </p>
      </div>
}))

  return (
    <div className="bg-white mx-2 md:mx-4 lg:mx-32 cursor-pointer border-1 border border-slate-400 p-2">
      <div className="text-slate-800 font-semibold px-4 capitalize">{question}</div>
      <span className="text-xs font-semibold inline-block ml-4 py-1 px-2 uppercase rounded-full text-rose-600 bg-rose-200 uppercase last:mr-0 mr-1">
  {category}
</span>
      <div className="text-red-700">
        <Chat className="cursor-pointer" onClick={handleShow} />
        <div className="m-2">
          {show && (
            <>
              <form onSubmit={submitAnswer}>
              <input
              required
                className="border border-1 border-black text-black rounded-md py-1 px-2"
                placeholder="answer the question"
                onChange={(e)=>setAns(e.target.value)}
                value={ans}
              />
              {token?<button type="submit" className="focus:outline-none text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >Answer</button>:<div/>}


              </form>
              {list}
             
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
