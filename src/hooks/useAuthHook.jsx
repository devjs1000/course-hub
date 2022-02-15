import axios from 'axios';
import useStore from '../context/useStore';

const useAuthHook = () => {
    const {setUser,setUserLoading} = useStore()


    /* Signup Function */
    const signup =async (data)=>{

        setUserLoading(true)
        try{
            const response=await axios.post('http://management-xcitedu.herokuapp.com/user/userRegister',data)
            if(response.data){
                setUser(response.data)
                console.log(response);
                setUserLoading(false)
            }else{
                setUserLoading(false)
            }
          }catch(error){
            setUserLoading(false)
          }
    }

    /* Login Function */
    const login =async (data)=>{
        setUserLoading(true)
        try{
            const response=await axios.post('/api/user/userLogin',data)
            if(response.data){
                setUser(response.data)
                setUserLoading(false)
            }else{
                setUserLoading(false)
            }
          }catch(error){
            setUserLoading(false)
          }
    }

    /* Logout Function */
    const logout = ()=>{
        setUser({})
        localStorage.removeItem("userinfo");
    }

    return {signup,login,logout}
};

export default useAuthHook;