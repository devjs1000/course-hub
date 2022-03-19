import FormControl from "../UI/FormControl";
import { Children, useState } from "react";
import Tags from "./Tags";
import { Box, XOctagon } from "react-bootstrap-icons";
import { createQuiz } from "../../service/fetch/courseApi";
import useStore from "../../service/context/useStore";

export default () => {
  const [quiz, setQuiz] = useState({});
  const [wrong, setWrong] = useState([]);
  const { user, myCourses } = useStore();
  const [id, setId] = useState("");
  const getQuiz = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = {
      ...quiz,
    };
    newData[name] = value;
    setQuiz(newData);
  };

  const groupClass =
    "flex flex-col w-full flex-wrap gap-4 sm:flex-row sm:gap-6 my-2";

  const handleCreateQuiz = () => {
    console.log(wrong);
    let data = { ...quiz };
    console.log(quiz, id);
    createQuiz(id, data.question, data.correct, wrong, (res) => {
      console.log(res);
    });
  };
  return (
    <div className="min-h-[80vh] mx-2">
      <FormControl
        type="text"
        label="question"
        icon="QUESTION"
        onChange={getQuiz}
      />
      <div className={groupClass}>
        <Tags
          setTags={setWrong}
          tags={wrong}
          placeholder="Incorrect"
          icon={<XOctagon />}
        />
        <select
          className="py-2 px-2 text-blue-500 bg-slate-100 shadow-md hover:shadow-lg"
          onChange={(e) => setId(e.target.value)}
        >
          {myCourses !== undefined ? (
            Children.toArray(
              myCourses.map((a) => {
                return <option value={a._id}>{a.name}</option>;
              })
            )
          ) : (
            <BoxLoading />
          )}
        </select>
        <FormControl
          type="text"
          label="correct"
          icon="CORRECT"
          onChange={getQuiz}
        />
      </div>
      <button
        onClick={handleCreateQuiz}
        className="bg-green-500  text-white font-semibold px-4 py-2"
      >
        create Quiz
      </button>
    </div>
  );
};
