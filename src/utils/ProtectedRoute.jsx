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
				console.log('Masuk');
				setIsAuth(true);
			} else {
				console.log('Gagal');
				setIsAuth(false);
			}
		};

		getAuth();
	}, [authCheck]);

	if (isAuth === null) return null;

	return isAuth ? <Outlet /> : <Navigate to='/admin/login' />;
};

export default ProtectedRoute;
