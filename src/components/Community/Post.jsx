import { Children, useState } from "react";
import Button from "../../UI/Button";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import { Plus, Chat } from "react-bootstrap-icons";
import useStore from "../../context/useStore";
import {allQuestionsQuery} from '../../graphql/Queries'

const Category = ({ question, answers, category,id }) => {
  const {posts,setPosts} = useStore()
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  // console.log(answers)
  const addPost = e=>{
    e.preventDefault()
    const post = posts.find(single=>single.id===id)
    post.answers.push(e.target[0].value)
    const merged = posts.filter(single=>single.id!==id||post)
    setPosts(merged)
    e.target.reset()
  }
  return (
    <div className="bg-white mx-2 md:mx-4 lg:mx-32 cursor-pointer border-1 border border-slate-400 p-2">
      <div className="text-slate-800 font-semibold px-4 capitalize">{question}</div>
      <div className="bg-yellow-500 rounded-lg inline-block px-4 my-2 mx-4 text-slate-500">
        {category}
      </div>
      <div className="text-red-700">
        <Chat className="cursor-pointer" onClick={handleShow} />
        <div className="m-2">
          {show && (
            <>
              <form onSubmit={addPost}>
              <input
              required
                className="bg-slate-50 py-1 px-2"
                placeholder="answer the question"
              />
              </form>
              {Children.toArray(
                answers?.map((a) => {
                 if( a=='' || a==' ' || a==null) return;
                  return (
                    <div className="my-2 py-2 px-2 text-slate-800 border border-[2px] border-slate-200 ">
                      {a}
                    </div>
                  );
                })
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
