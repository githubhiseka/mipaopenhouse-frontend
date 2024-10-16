import axios from 'axios';
import emailjs from '@emailjs/browser';

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
	baseURL: baseURL,
});

export default function useAdmin() {
	const updateData = async ({ userData, status }) => {
		try {
			console.log(userData);
			const data = {
				nama: userData.nama,
				email: userData.email,
				kontak: userData.kontak,
				asal_sekolah: userData.asal_sekolah,
				kelas: userData.kelas,
				paket: userData.paket,
				metode: userData.metode,
				status: status,
			};
			console.log(data);

			const response = await axiosInstance.put(`pembayaran/${userData.id}`, data, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});

			return response;
		} catch (error) {
			console.error(error);
		}
	};

	const getPendingData = async () => {
		try {
			const response = await axiosInstance.get('pembayaran?page=0&perPage=300&status=pending', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});

			console.log(response);

			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const getDataFilter = async ({ page, search, metode, paket, status, kodeReveal, bundle }) => {
		try {
			let uri = 'pembayaran';
			uri += `?page=${page}`;

			if (search) {
				uri += `&search=${search}&perPage=300`;
			} else {
				uri += '&perPage=300';
			}

			if (metode) {
				uri += `&metode=${metode}`;
			}

			if (paket) {
				uri += `&paket=${paket}`;
			}

			if (status) {
				uri += `&status=${status}`;
			}

			if (kodeReveal) {
				uri += `&kodeReveal=${kodeReveal}`;
			}

			if (bundle) {
				uri += `&bundle=${bundle}`;
			}

			console.log(uri);

			const response = await axiosInstance.get(uri, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});

			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const deleteUser = async (id) => {
		try {
			const response = await axiosInstance.delete(`pembayaran/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});

			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const sendEmail = async ({ email, name, bundle }) => {
		try {
			const bundle_text =
				'Untuk pembelian tiket bundle dimohon untuk mengisi link konfirmasi data pembelian tiket di bawah ini : \nhttps://bit.ly/KonfirmasiDataPembelianTiketBundle\n';
			console.log('sending email');
			console.log(email, name, bundle);
			const response = await emailjs.send('service_qg7p35k', 'template_verify', {
				to_email: email,
				name: name.trim().split(' ')[0],
				bundle_text: bundle !== 'personal' ? bundle_text : '',
			});
			console.log(response);
			console.log('Email Sent!');
			return 'Email Sent!';
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const sendRejectEmail = async ({ email, name }) => {
		try {
			console.log('sending email');
			const response = await emailjs.send('service_qg7p35k', 'template_reject', {
				to_email: email,
				name: name.trim().split(' ')[0],
			});
			console.log('Email Sent!');
			return 'Email Sent!';
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	return { updateData, getDataFilter, deleteUser, sendEmail, getPendingData, sendRejectEmail };
}
