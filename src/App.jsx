import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/header/Navbar'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile';
import MyCourses from './components/MyCourses';
import Footer from './components/Footer';
import Assignment from './components/Assignment';
import Community from './components/Community/Community'

// const Login =lazy(()=> import('./components/Auth/Login'))
// const Signup =lazy(()=> import('./components/Auth/Signup'))
// const Profile =lazy(()=> import('./components/Profile'))
// const Assignment =lazy(()=> import('./components/Assignment'))
// const MyCourses =lazy(()=> import('./components/MyCourses'))
// const Footer=lazy(()=>import('./components/Footer'))

//dont delete the lazy loding it is disabled for accessing hot reloading at the time of development

function App() {
	useEffect(()=>{

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
					<Route path='/Community' element={<Community />} />

			</Routes>
			<Footer />

			</Suspense>

		</div>
	);
}

export default App;
