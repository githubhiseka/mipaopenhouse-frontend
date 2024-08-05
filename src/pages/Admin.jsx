import React, { useState } from 'react';
import AdminLogin from './AdminLogin.';
import useApi from '../hooks/useApi'; // Import your custom hook
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { customerData, getAllCustomers, handleLoginSubmit, authError } =
		useApi();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	getAllCustomers();
	// }, []);

	const handleLoginSubmitWrapper = async () => {
		console.log('handleLoginSubmitWrapper');
		const result = await handleLoginSubmit(email, password);
		if (result) {
			localStorage.setItem('access_token', result.session.access_token);
			navigate('/admin/dashboard');
		}
	};

	return (
		<div>
			{authError && <div>Error: {authError.message}</div>}
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
