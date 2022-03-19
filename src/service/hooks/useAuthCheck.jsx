import axios from "axios";
import {
	useJwt
} from "react-jwt";
import {userDetails} from '../service/fetch/userApi'

const useAuthCheck = () => {
	const token = localStorage.getItem("accessToken");
	const {
		decodedToken,
		isExpired
	} = useJwt(token);

	const authCheck = async (setUser, setUserLoading) => {
console.log('token'+isExpired);
		if (isExpired) {
			localStorage.removeItem("accessToken");
			setUser({});
			console.log('token expired');
			return setUserLoading(false);
		}

		if (!decodedToken?.id) {
			localStorage.removeItem("accessToken");
			setUser({});
			console.log('token not decoded');
			return setUserLoading(false);
		}

		try {
			const response = await axios.get("api link will be here", {
				headers: {
					Authorization: `Bearer ${token}`
				},
			});

			console.log('trying man');
			if (response?.data?.success) {
				setUser(response.data.data);
				localStorage.setItem("accessToken", response.data.token);
				setUserLoading(false);
			} else {
				/* do something here */
				setUserLoading(false);
			}
		} catch (error) {
			console.log(error);
			/* do something here */
			setUserLoading(false);
		}
	};

	return {
		authCheck
	}
};

export default useAuthCheck;
