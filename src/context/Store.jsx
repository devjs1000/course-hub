import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {postPrint, teacherPrint, studentPrint}  from '../bluePrint/contextPrint'
import {
	allCourses,
	getAllCoursesOfUser,
} from '../fetch/courseApi';
import { getAssignmentsOfUser } from '../fetch/assignmentApi';
// import useAuthCheck from "../hooks/useAuthCheck";

const Store = () => {
	// const {authCheck} = useAuthCheck()
	const location = useLocation();
	const path = location.pathname.split('/')[1];
	const [user, setUser] = useState({});
	const [userLoading, setUserLoading] = useState(true);
	const [allCoursesData, setAllCoursesData] = useState([]);
	const [allCoursesLoading, setAllCoursesLoading] = useState(true);
	const [posts, setPosts] = useState(postPrint);
	const [myCourses, setMyCourses] = useState({});
	const [first, setFirst] = useState(0);
	const [assignments, setAssignments] = useState({});

	useEffect(() => {
		allCourses(data => {
			setAllCoursesData(data);
			setAllCoursesLoading(false);
		});
	}, []);

	useEffect(() => {
		let isMount = true;

		// authCheck(setUser,setUserLoading)
		if (isMount) {
			// setUser(studentData.data);
			setUser(teacherPrint);

			setUserLoading(false);
		}
		return () => {
			isMount = false;
		};
	}, []);
	//stoped the course for development process so that it don't hit api so many times


	//after user registered it will render and called
	useEffect(() => {
		let isMount = true;
		if (isMount) {
			try {
				if (user._id.length > 8) {
					getAllCoursesOfUser(user._id, courses => {
						setMyCourses(courses.data);
					});
					getAssignmentsOfUser(user._id, data => {
						console.log(data);
						setAssignments(data.data);
					});
				}
			} catch (error) {
				console.log('eror');
			}
		}

		return () => {
			isMount = false;
		};
	}, [user]);

	//returning for global access
	return {
		user,
		setUser,

		userLoading,
		setUserLoading,

		allCoursesData,
		allCoursesLoading,

		posts,
		setPosts,

		myCourses,
		setMyCourses,

		assignments,
		setAssignments,
	};
};

export default Store;
