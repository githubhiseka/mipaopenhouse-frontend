import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { DEMO_MODE } from '../config/env';

const ProtectedRoute = () => {
	const [isAuth, setIsAuth] = useState(null);
	const { authCheck } = useApi();

	useEffect(() => {
		let isMounted = true;

		const getAuth = async () => {
			// ✅ Demo mode: bypass backend auth check
			if (DEMO_MODE) {
				if (isMounted) setIsAuth(true);
				return;
			}

			try {
				const response = await authCheck();
				if (!isMounted) return;

				if (response?.status === 200) {
					setIsAuth(true);
				} else {
					setIsAuth(false);
				}
			} catch (err) {
				if (!isMounted) return;
				setIsAuth(false);
			}
		};

		getAuth();

		return () => {
			isMounted = false;
		};
	}, [authCheck]);

	if (isAuth === null) return null;

	return isAuth ? <Outlet /> : <Navigate to='/admin/login' replace />;
};

export default ProtectedRoute;
