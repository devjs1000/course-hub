import useStore from "../context/useStore";
import { gql, useMutation } from "@apollo/client";

const signupMutation = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $description: String!
    $phone: String!
    $image: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      description: $description
      phone: $phone
      image: $image
    ) {
      name
      id
      image
      email
      description
      phone
      token
    }
  }
`;

const loginMutation = gql`
  mutation CreateLogin($email: String!, $password: String!) {
    createLogin(email: $email, password: $password) {
      token
      userData {
        name
        id
        image
        email
        password
        description
        phone
        token
      }
    }
  }
`;

const useAuthHook = () => {
  const [signupFunction] = useMutation(signupMutation);
  const [loginFunction] = useMutation(loginMutation);
  const { setUser, setUserLoading } = useStore();

  /* Signup Function */
  const signup = async (inputs) => {
    setUserLoading(true);
    try {
      const response = await signupFunction({ variables: inputs });
      if (response.data) {
        setUser(response.data.createUser);
        localStorage.setItem("accessToken", response.data.createUser.token);
        setUserLoading(false);
      } else {
        setUserLoading(false);
        console.log("something went wrong");
      }
    } catch (err) {
      console.log(err);
      setUserLoading(false);
    }
  };

  /* Login Function */
  const login = async (inputs) => {
    setUserLoading(true);
    try {
      const response = await loginFunction({ variables: inputs });
      if (response?.data) {
        setUser(response.data.createLogin.userData);
        localStorage.setItem("accessToken", response.data.createLogin.token);
        setUserLoading(false);
      } else {
        setUserLoading(false);
        console.log("something went wrong");
      }
    } catch (err) {
      console.log(err);
      setUserLoading(false);
    }
  };

  /* Logout Function */
  const logout = () => {
    setUser({});
    localStorage.removeItem("accessToken");
  };

  return { signup, login, logout };
};

export default useAuthHook;
