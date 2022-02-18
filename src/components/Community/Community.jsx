import { Children } from "react";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import Category from "./Category";
import { Plus } from "react-bootstrap-icons";
import Post from "./Post";

const Community = () => {
  const posts = [
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
    {
      category: "Frontend",
      question: "life is full of fun when you enjoy it fully",
      answers: ["yes good", "right man keep it up", "wow woooh"],
    },
  ];
  return (
    <div className="bg-slate-100 min-h-screen ">
      <div className="bg-white  px-4 flex sticky top-0">
        <Search placeholder="search your answers" />
        <button className="flex items-center text-slate-700  border-[2px] border-slate-100 px-2 bg-white">
          <Plus className="text-red-700   mx-2" size={30} />
          Ask<span className="text-red-700 mx-1">?</span>
        </button>
      </div>

      <div className="grid grid-cols-5 h-auto w-full gap-2">
        <Category classes="bg-slate-100 sticky top-[100px] px-4 py-4 col-span-1" />
        <div className="col-span-4  ">
          {Children.toArray(
            posts.map((a) => {
              return (
                <Post
                  question={a.question}
                  category="Frontend"
                  answers={a.answers}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
