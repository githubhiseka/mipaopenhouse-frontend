import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import AdminTable from '../components/Admin/AdminTable';
import AdminSideBar from '../components/Admin/AdminSideBar';
import useAdmin from '../hooks/useAdmin';
import { Search, SearchIcon } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import cn from 'classnames';
import { DEMO_MODE } from '../config/env';

const DEMO_CUSTOMERS = [
	{
		id: 1,
		nama: 'Sample User',
		email: 'sample.user@example.com',
		created_at: '2024-10-01T08:30:00.000Z',
		paket: 'Regular',
		bundle: 'No',
		status: 'verified',

		kontak: '081234567890',
		asal_sekolah: 'SMA Contoh 1',
		kelas: '12',
		metode: 'Transfer',
		kode_reveal: 'DEMO123',
		bukti_transaksi_url: 'https://example.com',
	},
	{
		id: 2,
		nama: 'Another User',
		email: 'another.user@example.com',
		created_at: '2024-10-02T10:15:00.000Z',
		paket: 'VIP',
		bundle: 'Yes',
		status: 'pending',

		kontak: '089876543210',
		asal_sekolah: 'SMA Contoh 2',
		kelas: '11',
		metode: 'QRIS',
		kode_reveal: null,
		bukti_transaksi_url: 'https://example.com',
	},
];


export default function AdminDashboard() {
	const [customerData, setCustomerData] = useState([]);
	const [selectedCustomer, setSelectedCustomer] = useState(null);
	const [stringSearch, setStringSearch] = useState('');
	const [metodePembayaran, setMetodePembayaran] = useState('');
	const [paket, setPaket] = useState('');
	const [bundle, setBundle] = useState('');
	const [status, setStatus] = useState('');
	const [kodeReveal, setKodeReveal] = useState('');
	const [canLoadMore, setCanLoadMore] = useState(true);
	const [page, setPage] = useState(0);
	const { getDataFilter, deleteUser } = useAdmin();

	// const DEMO_CUSTOMERS = [
	// 	{
	// 		id: 1,
	// 		name: 'Sample User',
	// 		email: 'sample.user@example.com',
	// 		date: '2024-10-01',
	// 		paket: 'Regular',
	// 		bundle: 'No',
	// 		verified: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Another User',
	// 		email: 'another.user@example.com',
	// 		date: '2024-10-02',
	// 		paket: 'VIP',
	// 		bundle: 'Yes',
	// 		verified: false,
	// 	},
	// ];

	const fetchData = async () => {
		if (DEMO_MODE) {
			setCustomerData(DEMO_CUSTOMERS);
			setSelectedCustomer(null);
			setCanLoadMore(false);
			setPage(0);
			toast.success(`${DEMO_CUSTOMERS.length} users found (demo data)`);
			return;
		}

		toast.promise(
			getDataFilter({
				page: 0,
				search: stringSearch,
				metode: metodePembayaran,
				paket: paket,
				status: status,
				kodeReveal: kodeReveal,
				bundle: bundle,
			}),
			{
				loading: 'Fetching Data...',
				success: (data) => {
					setCustomerData(data);
					return `${data.length} users found`;
				},
				error: () => {
					setCustomerData([]);
					return 'Tidak ada data yang ditemukan';
				},
			}
		);
	};

	const loadMore = async () => {
		if (DEMO_MODE) return;
		if (!canLoadMore) return;
		toast.promise(
			getDataFilter({
				page: page + 1,
				search: stringSearch,
				metode: metodePembayaran,
				paket: paket,
				status: status,
			}),
			{
				loading: 'Fetching Data...',
				success: (data) => {
					setCustomerData((prev) => [...prev, ...data]);
					setPage((prev) => prev + 1);
					if (data.length < 7) {
						setCanLoadMore(false);
					}
					return `${data.length} users found`;
				},
				error: () => {
					return 'Tidak ada data yang ditemukan';
				},
			}
		);
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (event.key === 'Enter') {
				fetchData();
			}
		};

		window.addEventListener('keypress', handleKeyPress);
		return () => {
			window.removeEventListener('keypress', handleKeyPress);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stringSearch, metodePembayaran, paket, status, kodeReveal]);

	const handleDelete = async (id) => {
		if (DEMO_MODE) {
			toast('Demo mode: delete is disabled');
			return;
		}

		const targetId = id ?? selectedCustomer?.id;
		if (!targetId) return;

		toast.promise(deleteUser(targetId), {
			loading: 'Deleting...',
			success: () => {
				setCustomerData((prev) => prev.filter((item) => item.id !== targetId));
				setSelectedCustomer(null);
				return 'Deleted';
			},
			error: () => 'Failed to delete',
		});
	};

	return (
		<>
			<div className='flex h-auto w-full md:h-screen'>
				<Toaster richColors />
				<AdminSideBar />
				<div className='mt-20 flex h-full w-full flex-col gap-8 p-8 md:mt-0 md:flex-row'>
					<div className='flex h-full w-full flex-col rounded-md border-[1px] border-gray-300/50 p-8 py-4 shadow-md'>
						<div className='flex h-auto w-full justify-between'>
							<h1 className='text-3xl font-bold'>All Transactions</h1>
							<a
								className='flex h-full cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-gray-100/70 md:py-0'
								href='https://google.com/sheets/about/'
								target='_blank'
								rel='noreferrer'>
								<img
									src='https://2.bp.blogspot.com/-hBfU2YnPnuc/WimJErMCwKI/AAAAAAAADrg/sWP4nS1jSB0toeYCa0KXSsfuFal1ZMgGQCLcBGAs/s1600/google-sheets-icon.webp'
									alt=''
									className='h-6 w-6'
								/>
								<p className='hidden rounded-md font-bold text-blue-500 md:block'>Link to Sheets</p>
							</a>
						</div>
						<div className='flex h-auto w-full flex-col items-center gap-1 md:mb-3 md:flex-row md:gap-4'>
							<div className='flex w-full flex-col truncate md:w-2/3'>
								<label htmlFor='search'>Search</label>
								<input
									type='text'
									id='search'
									className='w-full rounded-md border-2 border-gray-300/50 p-2'
									placeholder='Search by name, email, or kode referral'
									value={stringSearch}
									onChange={(e) => setStringSearch(e.target.value)}
								/>
							</div>
							<div className='flex w-full flex-col truncate md:w-1/3'>
								<label htmlFor='search'>Kode Referral</label>
								<input
									type='text'
									id='search'
									className='w-full rounded-md border-2 border-gray-300/50 p-2'
									placeholder='Search by kode referral'
									value={kodeReveal}
									onChange={(e) => setKodeReveal(e.target.value)}
								/>
							</div>
							<div className='flex w-full gap-3 md:flex md:w-[80%] md:gap-4'>
								<div className='flex w-1/3 flex-col truncate'>
									<label htmlFor='metode-pembayaran' className='text-gray-700/90'>
										Bundle
									</label>
									<select
										className='w-full rounded-md border-2 border-gray-300/50 bg-gray-200/10 p-2'
										id='metode-pembayaran'
										onChange={(e) => setBundle(e.target.value)}>
										<option value='' selected>
											All
										</option>
										<option value='personal'>Personal</option>
										<option value='trio'>Trio</option>
										<option value='penta'>Penta</option>
									</select>
								</div>
								<div className='flex w-1/3 flex-col truncate'>
									<label htmlFor='metode-pembayaran' className='text-gray-700/90'>
										Metode Pembayaran
									</label>
									<select
										className='w-full rounded-md border-2 border-gray-300/50 bg-gray-200/10 p-2'
										id='metode-pembayaran'
										onChange={(e) => setMetodePembayaran(e.target.value)}>
										<option value='' selected>
											All
										</option>
										<option value='cash'>Cash</option>
										<option value='e-wallet'>E-Money</option>
										<option value='bank'>Bank</option>
									</select>
								</div>
								<div className='flex w-1/3 flex-col truncate'>
									<label htmlFor='paket' className='text-gray-700/90'>
										Paket
									</label>
									<select
										className='w-full rounded-md border-2 border-gray-300/50 bg-gray-200/10 p-2'
										id='paket'
										onChange={(e) => setPaket(e.target.value)}>
										<option value='' selected>
											All
										</option>
										{
											// for loop 6 times
											Array.from({ length: 6 }, (_, i) => (
												<option key={i} value={i + 1}>
													Paket {i + 1}
												</option>
											))
										}
									</select>
								</div>
								<div className='flex w-1/3 flex-col truncate'>
									<label htmlFor='status' className='text-gray-700/90'>
										Status
									</label>
									<select
										className='w-full rounded-md border-2 border-gray-300/50 bg-gray-200/10 p-2'
										id='status'
										onChange={(e) => setStatus(e.target.value)}>
										<option value='' selected>
											All
										</option>
										<option value='verified'>verified</option>
										<option value='pending'>pending</option>
										<option value='rejected'>Rejected</option>
									</select>
								</div>
							</div>
							<div className='flex h-full w-full flex-col items-center justify-center md:w-[7%]'>
								<label htmlFor='' className='hidden opacity-0 md:block'>
									go
								</label>
								<div
									className='flex h-auto w-full items-center rounded-md border-[1px] border-gray-800/50 bg-gray-500/80 p-2'
									onClick={fetchData}>
									<SearchIcon className='w-full cursor-pointer' color='white' />
								</div>
							</div>
						</div>

						<div className="p-2 text-sm text-white">
							DEMO_MODE: {String(DEMO_MODE)} | Rows: {customerData.length}
						</div>

						<AdminTable
							data={customerData}
							setSelectedCustomer={setSelectedCustomer}
							selectedCustomer={selectedCustomer}
							handleDelete={handleDelete}
						/>
						<p className='px-4 text-sm text-gray-600'>Total: {customerData.length} users</p>
					</div>
				</div>
			</div>
		</>
	);
}
