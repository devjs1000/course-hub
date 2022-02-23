import { Children, useEffect, useState } from "react";
import Button from "../../UI/Button";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import { Plus } from "react-bootstrap-icons";
import useStore from "../../context/useStore";
const Category = (classes) => {
  const { allCoursesData } = useStore();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //separating data category wise
    let data=allCoursesData.map((a) => {
      return {name:a.name, type:a.type, id:a._id}
    });

    setCategories(data);
  }, [allCoursesData]);

  return (
    <div className={classes}>
      {Children.toArray(
        categories.map((course) => {
          return (
            <div className="bg-white my-2 py-2  hover:bg-red-700 hover:text-white transition-all cursor-pointer text-slate-700 font-semibold px-4">
             {course.name}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Category;
