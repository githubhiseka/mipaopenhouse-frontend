import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Matematika from './pages/Matematika';
import Biologi from './pages/Biologi';
import Kimia from './pages/Kimia'
import Fisika from './pages/Fisika'
import Geografi from './pages/Geografi'
import Geosains from './pages/Geosains'
import Ticketing from './pages/Ticketing';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path='/matematika' element={<Matematika />} />
				<Route path='/biologi' element={<Biologi />} />
				<Route path='/kimia' element={<Kimia />} />
				<Route path='/fisika' element={<Fisika />} />
				<Route path='/geografi' element={<Geografi />} />
				<Route path='/geosains' element={<Geosains />} />
				<Route path='/ticket' element={<Ticketing />} />
			</Routes>
		</Router>
	);
};

export default App;
