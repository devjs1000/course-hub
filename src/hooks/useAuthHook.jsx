import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useStore from '../context/useStore';

const useAuthHook = () => {
    const {setUser,setUserLoading} = useStore()
    const navigate = useNavigate()

    /* Signup Function */
    const signup =async (data)=>{
        setUserLoading(true)
        try{
            const response= await axios.post('https://management-xcitedu.herokuapp.com/user/userRegister',data)
            if(response.data.success){
                setUserLoading(false)
                navigate('./login')
            }else{
                /* do something */
                setUserLoading(false)
            }
          }catch(error){
              /* do something */
            setUserLoading(false)
          }
    }

    /* Login Function */
    const login =async (data)=>{
        setUserLoading(true)
        try{
            const response= await axios.post('https://management-xcitedu.herokuapp.com/user/userLogin',data)
            if(response?.data?.success){
                setUser(response.data.data)
                localStorage.setItem("accessToken", response.data.token);
                setUserLoading(false)
            }else{
                /* do something */
                setUserLoading(false)
            }
          }catch(error){
              /* do something */
            setUserLoading(false)
          }
    }

    /* Logout Function */
    const logout = ()=>{
        setUser({})
        localStorage.removeItem("accessToken");
    }

    return {signup,login,logout}
};

export default useAuthHook;
