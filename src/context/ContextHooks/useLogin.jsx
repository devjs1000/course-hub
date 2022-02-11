import axios from 'axios';
import useStore from '../useStore'

const useLogin = () => {
    const {setUser,setUserLoading, userLoading} = useStore()

    if(userLoading) return

    const login =async (data)=>{
        setUserLoading(true)
        try{
            const response= axios.post('/api/user/login',data)
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
