import { Children, useState } from "react";
import Button from "../../UI/Button";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import { Plus, Chat } from "react-bootstrap-icons";
import useStore from "../../../service/context/useStore";
const Category = ({ question, answers, category,id }) => {
  const {posts,setPosts} = useStore()
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  const addPost = e=>{
    e.preventDefault()
    const post = posts.find(single=>single.id===id)
    post.answers.push(e.target[0].value)
    const merged = posts.filter(single=>single.id!==id||post)
    setPosts(merged)
    e.target.reset()
  }
  return (
    <div className="bg-white py-2 px-4 my-2">
      <div className="text-slate-800 font-semibold">{question}</div>
      <div className="bg-slate-100 inline-block px-4 my-2 text-slate-500">
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
                answers.map((a) => {
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
