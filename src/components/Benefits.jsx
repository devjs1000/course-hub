import React from 'react'
import useStore from "../context/useStore";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Benefits = () => {
   const { user, theme } = useStore();
  const { id } = useParams();
    const mainDivStyles = `${
    theme ? "bg-slate-800 text-white" : "bg-white"
  } py-8 px-16`;
  return (
    <div className={mainDivStyles}>
      <nav className="flex gap-12 text-[20px] mb-8 bg-gray-200">
          <Link to={`/create-chapter/${id}`}>
            <h1 className="pb-2 pt-4 px-4 font-bold">New Chapter</h1>
          </Link>
          <Link to={`/previous-chapter/${id}`}>
            <h1 className="pb-2 pt-4 font-bold">Previous Chapters</h1>
          </Link>
          <Link to={`/update-discount/${id}`}>
            <h1 className="pb-2 pt-4 font-bold">
              Update Discount
            </h1>
          </Link>
          <Link to={`/benefits/${id}`}>
            <h1 className="pb-2 pt-4 font-bold border-b-4 border-red-500">
              Benefits
            </h1>
          </Link>
        </nav>
    </div>
  )
}

export default Benefits