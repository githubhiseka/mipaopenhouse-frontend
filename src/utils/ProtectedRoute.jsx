import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useApi from '../hooks/useApi';

const ProtectedRoute = () => {
	const [isAuth, setIsAuth] = useState(null);
	const { authCheck } = useApi();

	useEffect(() => {
		const getAuth = async () => {
			const response = await authCheck();
			console.log(response);
			if (response.status === 200) {
				console.log('masuk');
				setIsAuth(true);
			} else {
				setIsAuth(false);
			}
		};

		getAuth();
	}, []);

	if (isAuth === null) return null;

	return isAuth ? <Outlet /> : <Navigate to='/admin/login' />;
};

export default ProtectedRoute;
