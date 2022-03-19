import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useStore from "../../service/context/useStore";
import Loading from "../UI/Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, userLoading } = useStore();
  const location = useLocation();
  if (userLoading) {
    return <Loading />;
  }
  if (!user.id) {
    return <Navigate to="/login" state={{ location }} />;
  }
  return children;
};

export default PrivateRoute;
