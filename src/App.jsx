import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
	return (
		<div className="App rounded-md overflow-hidden">
			<Routes>
				<Route path={'/'} element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
