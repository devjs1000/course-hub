import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/header/Navbar';

function App() {
	return (
		<div className="overflow-hidden">
			<Navbar />
			<Routes>
				<Route path={'/'} element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
