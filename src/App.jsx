import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
	return (
		<div className="App rounded-md overflow-hidden">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
