import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navbar from './components/header/Navbar'
import Profile from './components/Profile';
function App() {
	return (
		<div className="App overflow-hidden">
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/my-profile' element={<Profile />} />

			</Routes>
			<Footer />
		</div>
	);
}

export default App;
