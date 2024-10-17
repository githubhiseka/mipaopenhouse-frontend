import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
	baseURL: baseURL,
});

export default function useTicket() {
	const getAccessToken = async () => {
		try {
			const email = import.meta.env.VITE_ADMIN_EMAIL;
			const password = import.meta.env.VITE_ADMIN_PASSWORD;

			const data = JSON.stringify({ email, password });

			const response = await axiosInstance.post('auth/login', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			console.log('response', response);
			return response.data.access_token;
		} catch (error) {
			console.error('Error getting access token:', error);
		}
	};

	const uploadImage = async (file) => {
		try {
			const access_token = await getAccessToken();
			const formData = new FormData();
			formData.append('bukti_pembayaran', file);

			const config = {
				method: 'post',
				url: 'pembayaran/upload',
				headers: {
					Authorization: `Bearer ${access_token}`,
					'Content-Type': 'multipart/form-data',
				},
				data: formData,
			};

			const response = await axiosInstance(config);
			console.log('url', response);
			return response.data;
		} catch (error) {
			console.error('Error uploading image:', error);
		}
	};

	const getStock = async (paket) => {
		try {
			const access_token = await getAccessToken();

			const response = await axiosInstance.get(`pembayaran/stok/${paket}`, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});

			console.log(response);

			return response.data;
		} catch (error) {
			console.error('Error getting stock:', error);
		}
	};

	const uploadPembayaran = async ({ userData, imgUrl }) => {
		try {
			console.log('userData', userData);
			const access_token = await getAccessToken();

			const mappedUserData = {
				nama: userData.nama,
				email: userData.email,
				kontak: userData.noTelp,
				asal_sekolah: userData.sekolah,
				kelas: userData.kelas,
				paket: userData.packet,
				metode: userData.payment,
				bukti_transaksi_url: imgUrl,
				kode_reveal: userData.reveal,
				bundle: userData.bundle?.toLowerCase(),
			};

			console.log(mappedUserData);

			const response = await axiosInstance.post('pembayaran', mappedUserData, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});

			console.log(response);

			return response.data;
		} catch (error) {
			console.error('Error uploading payment:', error);
			throw error;
		}
	};

	return { uploadImage, getStock, uploadPembayaran };
}
