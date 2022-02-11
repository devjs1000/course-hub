import { useState } from "react";

const Store = () => {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  return {
    user,
    setUser,
    userLoading,
    setUserLoading,
  };
};

export default Store;
