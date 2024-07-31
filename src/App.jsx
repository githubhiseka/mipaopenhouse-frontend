import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Matematika from './pages/Matematika';
import Biologi from './pages/Biologi';
import Ticketing from './pages/Ticketing';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					index
					element={<Homepage />}
				/>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/matematika'
					element={<Matematika />}
				/>
				<Route
					path='/biologi'
					element={<Biologi />}
				/>
				<Route
					path='/ticket'
					element={<Ticketing />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
