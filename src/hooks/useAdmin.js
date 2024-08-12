import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
const emailApiKey = import.meta.env.VITE_EMAIL_API_KEY;

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

			const response = await axiosInstance.put(`/functions/v1/rest-api/pembayaran/${userData.id}`, data, {
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
			const response = await axiosInstance.get(
				'/functions/v1/rest-api/pembayaran?page=0&perPage=300&status=pending',
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				}
			);

			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const getDataFilter = async ({ page, search, metode, paket, status, kodeReveal }) => {
		try {
			let uri = '/functions/v1/rest-api/pembayaran';
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
			const response = await axiosInstance.delete(`/functions/v1/rest-api/pembayaran/${id}`, {
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

	const sendEmail = async ({ email, name }) => {
		try {
			console.log(email, name);
			// create a formData
			console.log(emailApiKey);
			const formData = new FormData();
			formData.append('email', email);
			formData.append('access_key', emailApiKey);
			formData.append('subject', 'Mipa Open House UI 2024');
			formData.append('from_name', 'Mipa Open House');
			formData.append(
				'message',
				`Hi ${name}, Terima kasih sudah membeli tiket MIPA Open House 2024! Kami sangat senang menyambut kehadiran Anda di acara ini. 
				Jangan lupa, MIPA Open House 2024 akan dilaksanakan pada:\n
				Tanggal: Sabtu, 9 November 2024
				Tempat: Fakultas Matematika dan Ilmu Pengetahuan Alam UI
				https://maps.app.goo.gl/fgR4HS4iASTW9Gfz8?g_st=ic\n
				Untuk memantau informasi terbaru seputar acara, jangan lupa untuk bergabung dengan grup WhatsApp resmi kami melalui link berikut: 
				https://chat.whatsapp.com/HqWa82BUH3EH9zi2VSrkhK
				Sampai jumpa di MIPA Open House 2024!`
			);

			console.log(formData);

			const response = await axios.post('https://api.web3forms.com/submit', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			console.log(response);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	return { updateData, getDataFilter, deleteUser, sendEmail, getPendingData };
}
