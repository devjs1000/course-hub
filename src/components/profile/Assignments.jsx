import { Children, useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { useQuery } from "@apollo/client";
import { myProjectsQuery } from "../../graphql/Queries";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Card = ({ name, image, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-assignment");
  };
  return (
    <div
      onClick={handleClick}
      className="shadow p-5 h-[20rem] w-[20rem]  rounded"
    >
      <img src={image} />
      <div>{name}</div>
    </div>
  );
};


export default ({}) => {
// 	const { user, myCourses, theme } = useStore();
// 	const {loading,error, data}=useQuery(myProjectsQuery, {
// 		variables:{
// 			"userId": user.id
// 		}
// 	})

// 	console.log(data);
	
// if(loading) return 'loading...'
// if(error) return 'error'
// console.log('assignment',data);

  const { myCourses } = useStore();

  console.log(myCourses, "assignment");
  return (
    <div>
      <ErrorBoundary FallbackComponent={"err"}>
        {Children.toArray(
          myCourses.map((a) => {
            return <Card name={a?.id} image={a?.image} id={a?.id} />;
          })
        )}
      </ErrorBoundary>
    </div>
  );

};
