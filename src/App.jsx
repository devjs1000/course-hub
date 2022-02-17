import { useState, useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Loading from './UI/BoxLoading';
import PrivateRoute from './components/PrivateRoute';
import CreateCourse from './components/CreateCourse';

import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile';
import MyCourses from './components/MyCourses';
import Footer from './components/Footer';
import Assignment from './components/Assignment';
import Community from './components/Community/Community';
import CourseDetails from './pages/CourseDetails';

// const Login =lazy(()=> import('./components/Auth/Login'))
// const Signup =lazy(()=> import('./components/Auth/Signup'))
// const Profile =lazy(()=> import('./components/Profile'))
// const Assignment =lazy(()=> import('./components/Assignment'))
// const MyCourses =lazy(()=> import('./components/MyCourses'))
// const Footer=lazy(()=>import('./components/Footer'))
// const Community =lazy(()=> import('./components/Community/Community'))
// const Home =lazy(()=> import('./pages/Home'))

//dont delete the lazy loding it is disabled for accessing hot reloading at the time of development

function App() {
	const [loading, setLoading] = useState(true);

	useLayoutEffect(() => {
		setTimeout(() => setLoading(false), 1500);
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<Navbar />
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route
								path="/my-profile"
								element={
									<PrivateRoute>
										<Profile />
									</PrivateRoute>
								}
							/>
							<Route path="/my-courses" element={<MyCourses />} />
							<Route path="/my-assignments" element={<Assignment />} />
							<Route path="/Community" element={<Community />} />
							<Route path="/create-course" element={<CreateCourse />} />
							<Route
								path="/coursedetails/:course"
								element={<CourseDetails />}
							/>
						</Routes>
						<Footer />
					</Suspense>
				</div>
			)}
		</>
	);
}

export default App;
