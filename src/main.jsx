import './styles.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import Admin from './pages/Admin';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
// import ProtectedRoute from './utils/ProtectedRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route
				path='/'
				element={<App />}
			/>
			<Route
				path='/admin'
				element={
					<Navigate
						to='/admin/login'
						replace
					/>
				}
			/>
			<Route
				path='/admin/login'
				element={<Admin />}
			></Route>
			<Route
				path='/admin/dashboard'
				element={<AdminDashboard />}
			></Route>
		</Routes>
	</BrowserRouter>
);
