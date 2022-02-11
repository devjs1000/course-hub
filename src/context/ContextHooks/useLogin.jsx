import axios from 'axios';
import useStore from '../useStore'

const useLogin = () => {
    const {setUser,setUserLoading} = useStore()

    const login =async (data)=>{
        setUserLoading(true)
        try{
            const response= axios.post('link will be here',data)
            if('all ok here from response'){
                // setUser(response.data) or do something else here
                setUserLoading(false)
            }else{
                // do something here
                setUserLoading(false)
            }
        }catch(error){
             // do something here
            setUserLoading(false)
        }
    }
    return {login}
};

export default useLogin;