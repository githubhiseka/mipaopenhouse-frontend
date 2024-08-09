import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import AdminTable from '../components/Admin/AdminTable';
import AdminSideBar from '../components/Admin/AdminSideBar';
import useAdmin from '../hooks/useAdmin';
import { Search, SearchIcon } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import cn from 'classnames';

export default function AdminDashboard() {
	const [customerData, setCustomerData] = useState([]);
	const [selectedCustomer, setSelectedCustomer] = useState(null);
	const [stringSearch, setStringSearch] = useState('');
	const [metodePembayaran, setMetodePembayaran] = useState('');
	const [paket, setPaket] = useState('');
	const [status, setStatus] = useState('');
	const [kodeReveal, setKodeReveal] = useState('');
	const [canLoadMore, setCanLoadMore] = useState(true);
	const [page, setPage] = useState(0);
	const { getDataFilter, deleteUser } = useAdmin();

	const fetchData = async () => {
		toast.promise(
			getDataFilter({
				page: 0,
				search: stringSearch,
				metode: metodePembayaran,
				paket: paket,
				status: status,
				kodeReveal: kodeReveal,
			}),
			{
				loading: 'Fetching Data...',
				success: (data) => {
					setCustomerData(data.pembayaran);
					return `${data.pembayaran.length} users found`;
				},
				error: () => {
					setCustomerData([]);
					return 'Tidak ada data yang ditemukan';
				},
			}
		);
	};

	const loadMore = async () => {
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
					setCustomerData((prev) => [...prev, ...data.pembayaran]);
					setPage((prev) => prev + 1);
					if (data.pembayaran.length < 7) {
						setCanLoadMore(false);
					}
					return `${data.pembayaran.length} users found`;
				},
				error: () => {
					return 'Tidak ada data yang ditemukan';
				},
			}
		);
	};

	useEffect(() => {
		fetchData();
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
	}, [stringSearch, metodePembayaran, paket, status, kodeReveal]);

	const handleDelete = async () => {
		console.log('delete', selectedCustomer);
		toast.promise(deleteUser(selectedCustomer.id), {
			loading: 'Deleting...',
			success: (data) => {
				setCustomerData((prev) => prev.filter((item) => item.id !== selectedCustomer.id));
				setSelectedCustomer(null);
				return 'Deleted';
			},
			error: () => {
				return 'Failed to delete';
			},
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
								<label htmlFor='search'>Kode Reveal</label>
								<input
									type='text'
									id='search'
									className='w-full rounded-md border-2 border-gray-300/50 p-2'
									placeholder='Search by kode referral'
									value={kodeReveal}
									onChange={(e) => setKodeReveal(e.target.value)}
								/>
							</div>
							<div className='flex w-full gap-3 md:flex md:w-[60%] md:gap-4'>
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
										<option value='e-money'>E-Money</option>
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
										<option value='failed'>Failed</option>
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
						<AdminTable
							data={customerData}
							setSelectedCustomer={setSelectedCustomer}
							selectedCustomer={selectedCustomer}
							handleDelete={handleDelete}
						/>
						<div className='flex h-auto w-full items-center justify-center pt-2'>
							<button
								className={cn(
									'rounded-md border-[1px] border-gray-800/50 bg-gray-500/80 px-4 py-2 font-bold text-white',
									{
										'cursor-not-allowed opacity-50': !canLoadMore,
									}
								)}
								onClick={loadMore}>
								Load More
							</button>
						</div>
						<p className='px-4 text-sm text-gray-600'>Total: {customerData.length} users</p>
					</div>
				</div>
			</div>
		</>
	);
}
