import axios from 'axios';
import useStore from '../useStore'

const useSignup = () => {
    const {setUser,setUserLoading} = useStore()

    const signup =async (data)=>{
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
    return {signup}
};

export default useSignup;