import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
	baseURL: baseURL,
});

export default function useApi() {
	const navigate = useNavigate();

	const getAllCustomers = async () => {
		const access_token = localStorage.getItem('access_token');

		try {
			const response = await axiosInstance.get('pembayaran', {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});

			return response.data;
		} catch (error) {
			navigate('/admin/login');
		}
	};

	const getCustomerById = async (id) => {
		try {
			const access_token = localStorage.getItem('access_token');

			const config = {
				method: 'get',
				url: `pembayaran/${id}`,
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			};

			const response = await axiosInstance(config);
			return response.data;
		} catch (error) {
			console.error('Error fetching customer by id:', error);
		}
	};

	const handleLoginSubmit = async (email, password) => {
		try {
			const data = JSON.stringify({ email, password });

			const config = {
				method: 'POST',
				url: 'auth/login',
				headers: {
					'Content-Type': 'application/json',
				},
				data,
			};

			let response = await axiosInstance(config);
			response = response.data;
			if (!response.access_token) {
				throw new Error('Invalid credentials');
			}

			console.log('Login response:', response);
			localStorage.setItem('access_token', response.access_token);
			localStorage.setItem('expires_in', response.expires_in);

			axiosInstance.interceptors.request.use((config) => {
				config.headers.Authorization = `Bearer ${response.access_token}`;
				return config;
			});

			return response; // Optionally return the response data if needed
		} catch (error) {
			console.error('Error logging in:', error);
		}
	};

	const authCheck = async () => {
		try {
			const access_token = localStorage.getItem('access_token');

			const response = await axiosInstance.get('pembayaran?page=1&perPage=0', {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});

			return response;
		} catch (error) {
			navigate('/admin/login');
		}
	};

	return {
		getAllCustomers,
		getCustomerById,
		handleLoginSubmit,
		authCheck,
	};
}
