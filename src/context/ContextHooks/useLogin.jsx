import axios from 'axios';
import useStore from '../useStore'

const useLogin = () => {
    const {setUser,setUserLoading} = useStore()


    const login =async (data)=>{
        setUserLoading(true)
        try{
            const response=await axios.post('http://management-xcitedu.herokuapp.com/user/userLogin',data)
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
    return {login}
};

export default useLogin;
