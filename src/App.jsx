import { useState, useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Loading from './UI/BoxLoading';
import PrivateRoute from './components/PrivateRoute';
import CreateCourse from './components/CreateCourse';
import CreateQuiz from './components/CreateQuiz';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile';
import MyCourses from './components/MyCourses';
import Footer from './components/Footer';
import Assignment from './components/Assignment';
import Community from './components/Community/Community';
import CourseDetails from './pages/CourseDetails';
import CreateAssignment from './components/CreateAssignment';
// import Modal from './components/Modal/Modal';


function App() {
	const [loading, setLoading] = useState(true);
	console.log(import.meta.env.VITE_DB);
	useLayoutEffect(() => {
		setTimeout(() => setLoading(false), 1500);
	}, []);

	// Require Hooks and Functions For Modal:

	// const [showModal, setShowModal] = useState(false);
	// const closeBtnHandler = () => setShowModal(false)

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
							<Route path="/create-quiz" element={<CreateQuiz />} />
							<Route path="/create-assignment" element={<CreateAssignment />} />

							<Route path="/*" element={<NotFound />} />

							<Route
								path="/coursedetails/:id"
								element={<CourseDetails />}
							/>
						</Routes>
						<Footer />
					</Suspense>
				</div>
			)}
			{/* Calling Modal */}
			{/* <div>
				{showModal ?
					<div
						className="back-drop fixed bg-[rgba(0,0,0,0.5)] h-full w-full transition-all"
						onClick={() => closeBtnHandler()}
					>
					</div>
					: null}
				<button
					className="btn-openModal bg-[#2c2c2c] text-[#eee] m-8 py-2 px-7 cursor-pointer text-lg"
					onClick={() => setShowModal(true)}
				>
					Open Modal
				</button>
				<Modal status={showModal} closeBtnHandler={closeBtnHandler} />
			</div> */}
		</>
	);
}

export default App;