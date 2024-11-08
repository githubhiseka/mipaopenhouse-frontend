import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Matematika from './pages/Matematika';
import Biologi from './pages/Biologi';
import Kimia from './pages/Kimia';
import Fisika from './pages/Fisika';
import Geografi from './pages/Geografi';
import Geosains from './pages/Geosains';
import Ticketing from './pages/Ticketing';
import Admin from './pages/Admin';
import AdminVerify from './pages/AdminVerify';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './utils/ProtectedRoute';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/*' element={<Navigate to='/' replace />} />
				<Route index element={<Homepage />} />
				<Route path='/matematika' element={<Matematika />} />
				<Route path='/biologi' element={<Biologi />} />
				<Route path='/kimia' element={<Kimia />} />
				<Route path='/fisika' element={<Fisika />} />
				<Route path='/geografi' element={<Geografi />} />
				<Route path='/geosains' element={<Geosains />} />

				<Route path='/' element={<App />} />
				<Route path='/admin' element={<Navigate to='/admin/login' replace />} />
				<Route path='/admin/login' element={<Admin />}></Route>

				<Route element={<ProtectedRoute />}>
					<Route path='/admin/verify' element={<AdminVerify />}></Route>
					<Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
