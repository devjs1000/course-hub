import { useState, useEffect, lazy, Suspense } from 'react';
import {getAllAssignmentsOfInstructor, getAssignmentsOfUser} from './fetch/assignmentApi'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/header/Navbar'
const Login =lazy(()=> import('./components/Auth/Login'))
const Signup =lazy(()=> import('./components/Auth/Signup'))
const Profile =lazy(()=> import('./components/Profile'))
const Assignment =lazy(()=> import('./components/Assignment'))
const MyCourses =lazy(()=> import('./components/MyCourses'))
const Footer=lazy(()=>import('./components/Footer'))

function App() {
	useEffect(()=>{
		// getAssignmentsOfUser('61d347889e68ba700bade96b', (data)=>{
		// 	console.log(data);
		// })


	}, [])
	return (
		<div className="App overflow-hidden">
			<Navbar />
			<Suspense fallback={'loading'}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/my-profile' element={<Profile />} />
				<Route path='/my-courses' element={<MyCourses />} />
				<Route path='/my-assignments' element={<Assignment />} />

			</Routes>
			<Footer />

			</Suspense>

		</div>
	);
}

export default App;
