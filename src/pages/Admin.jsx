import React, { useState } from 'react';
import AdminLogin from './AdminLogin.';
import useApi from '../hooks/useApi'; // Import your custom hook
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';

export default function Admin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { customerData, getAllCustomers, handleLoginSubmit } = useApi();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	getAllCustomers();
	// }, []);

	const handleLoginSubmitWrapper = async () => {
		toast.promise(handleLoginSubmit(email, password), {
			loading: 'Logging in...',
			success: (result) => {
				localStorage.setItem('access_token', result.session.access_token);
				navigate('/admin/verify');
				return 'Login Success';
			},
			error: 'Login Failed check you credentials and try again',
		});

		// const result = await handleLoginSubmit(email, password);
		// if (result) {
		// 	localStorage.setItem('access_token', result.session.access_token);
		// 	navigate('/admin/verify');
		// }
	};

	return (
		<div>
			<Toaster richColors position='top-center' />
			<AdminLogin
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				handleLoginSubmit={handleLoginSubmitWrapper}
			/>
		</div>
	);
}
