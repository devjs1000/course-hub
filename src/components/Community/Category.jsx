import { Children } from "react";
import Button from "../../UI/Button";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import { Plus } from "react-bootstrap-icons";
const Category = () => {
  const categories = ["Frontend", "Backend", "Designing", "Database", "Other"];
  return (
    <div className="bg-slate-100 h-auto px-4 py-4 w-[10rem]">
      {Children.toArray(
        categories.map((a) => {
          return (
            <div className="bg-white my-2 py-2 hover:bg-red-700 hover:text-white transition-all cursor-pointer text-slate-700 font-semibold px-4">
              {a}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Category;
