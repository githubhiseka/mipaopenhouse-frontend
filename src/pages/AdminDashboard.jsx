import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import AdminTable from '../components/Admin/AdminTable';
import AdminSideBar from '../components/Admin/AdminSideBar';

export default function AdminDashboard() {
	const [customerData, setCustomerData] = useState([]);
	const [selectedCustomer, setSelectedCustomer] = useState(null);
	const { getAllCustomers } = useApi();

	const fetchData = async () => {
		const response = await getAllCustomers();
		setCustomerData(response.pembayaran);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className='flex h-auto w-full md:h-screen'>
				<AdminSideBar />
				<div className='flex h-full w-full flex-col gap-8 p-8 md:flex-row'>
					<div className='hidden h-full w-full flex-col rounded-md border-[1px] border-gray-300/50 p-8 py-4 shadow-md md:flex'>
						<div className='h-auto'>
							<h1 className='text-3xl font-bold'>
								Verified Transaction
							</h1>
							<p className='text-gray-600'>
								Semua user yang belum di verifikasi:
							</p>
						</div>
						<AdminTable
							data={customerData}
							setSelectedCustomer={setSelectedCustomer}
							selectedCustomer={selectedCustomer}
						/>
						<p className='px-4 text-sm text-gray-600'>
							Total: {customerData.length} users
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
