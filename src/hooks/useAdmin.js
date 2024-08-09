import axios from 'axios';

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

			const response = axios.put(`/api/functions/v1/rest-api/pembayaran/${userData.id}`, data, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});

			return response;
		} catch (error) {
			console.error(error);
		}
	};

	const getDataFilter = async ({ page, search, metode, paket, status, kodeReveal }) => {
		try {
			let uri = '/api/functions/v1/rest-api/pembayaran';
			uri += `?page=${page}`;

			if (search) {
				uri += `&search=${search}&perPage=50`;
			} else {
				uri += '&perPage=7';
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

			console.log(uri);

			const response = await axios.get(uri, {
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
			const response = await axios.delete(`/api/functions/v1/rest-api/pembayaran/${id}`, {
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

	return { updateData, getDataFilter, deleteUser };
}
