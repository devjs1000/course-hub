import useStore from "../context/useStore";
import { useMutation } from "@apollo/client";
import { signupMutation, loginMutation } from "../graphql/Mutations";
import toast from 'react-hot-toast';


const useAuthHook = () => {
  const { setUser, setUserLoading } = useStore();
  const [signupFunction] = useMutation(signupMutation);
  const [createLogin] = useMutation(loginMutation);

  /* Signup Function */
  const signup = async (inputs) => {
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
    console.log(inputs)
    try {
      const response = await createLogin({ variables: {  "email": inputs.email,
      "password": inputs.password
    } });
      console.log(response)
      if (response?.data.createLogin.token!=='false') {
        setUser(response.data.createLogin.userData);
        localStorage.setItem("accessToken", response.data.createLogin.token);
        setUserLoading(false);
        toast.success('logged in successfully!')
      } else {
        setUserLoading(false);
        console.log("something went wrong");
        toast.error("Incorrect e-mail or password")

      }
    } catch (err) {
      toast.error("Please fill both the fields correctly")
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
