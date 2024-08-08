import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminTable from '../components/Admin/AdminTable';
import cn from 'classnames';
import { GiChecklist } from 'react-icons/gi';
import { Bell, Check, CheckCircleIcon, LogOut, X } from 'lucide-react';
import UserInformation from '../components/Admin/UserInformation';
import UserVerification from '../components/Admin/UserVerficiation';
import useApi from '../hooks/useApi';
import logo from '../assets/logo.svg';
import AdminSideBar from '../components/Admin/AdminSideBar';

export default function AdminVerify() {
	const [unverifiedCustomer, setUnverifiedCustomer] = useState([]);
	const [verifiedCustomer, setVerifiedCustomer] = useState([]);
	const [selectedCustomer, setSelectedCustomer] = useState(null);
	const [confirmationPopup, setConfirmationPopup] = useState(false);
	const [imagePopup, setImagePopup] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { getAllCustomers } = useApi();
	const Navigate = useNavigate();

	const fetchData = async () => {
		const response = await getAllCustomers();
		console.log(response);
		const verified = response.pembayaran.filter((item) => item.verified);
		setVerifiedCustomer(verified);
		const unverified = response.pembayaran.filter((item) => !item.verified);
		setUnverifiedCustomer(unverified);
		setIsLoading(false);
	};

	const handleVerify = async () => {
		const access_token = localStorage.getItem('access_token');
	};

	useEffect(() => {
		setIsLoading(true);
		fetchData();
	}, []);

	return (
		<>
			<div className='flex h-auto w-full md:h-screen'>
				<AdminSideBar />
				{!isLoading && (
					<div className='flex h-full w-full flex-col gap-8 p-8 md:flex-row'>
						<div className='flex h-[70vh] w-full flex-col gap-8 font-lato md:h-full md:w-2/3'>
							<div className='flex h-full w-full flex-col rounded-md border-[1px] border-gray-300/50 p-8 py-4 shadow-md md:h-full'>
								<div className='h-auto'>
									<h1 className='text-3xl font-bold'>
										Unverified Transaction
									</h1>
									<p className='text-gray-600'>
										Semua user yang belum di verifikasi:
									</p>
								</div>
								<AdminTable
									data={unverifiedCustomer}
									setSelectedCustomer={setSelectedCustomer}
									selectedCustomer={selectedCustomer}
								/>
								<p className='px-4 text-sm text-gray-600'>
									Total: {unverifiedCustomer.length} users
								</p>
							</div>
							{/* <div className='hidden h-auto w-full flex-col rounded-md border-[1px] border-gray-300/50 p-8 py-4 shadow-md md:flex md:h-1/2'>
								<div className='h-auto'>
									<h1 className='text-3xl font-bold'>
										Verified Transaction
									</h1>
									<p className='text-gray-600'>
										Semua user yang belum di verifikasi:
									</p>
								</div>
								<AdminTable
									data={verifiedCustomer}
									setSelectedCustomer={setSelectedCustomer}
									selectedCustomer={selectedCustomer}
								/>
								<p className='px-4 text-sm text-gray-600'>
									Total: {verifiedCustomer.length} users
								</p>
							</div> */}
						</div>
						<div className='flex h-full w-full flex-1 flex-col gap-4'>
							<div className='h-[60%] w-full rounded-md border-[1px] border-gray-300/50 shadow-md'>
								{selectedCustomer ? (
									<UserVerification
										item={selectedCustomer}
										setPopup={setImagePopup}
										setConfirmationPopup={
											setConfirmationPopup
										}
									/>
								) : (
									<div className='flex h-full w-full items-center justify-center'>
										Please Select A Transaction
									</div>
								)}
							</div>
							<div className='h-full w-full flex-1 overflow-y-auto rounded-md border-[1px] border-gray-300/50 shadow-md'>
								{selectedCustomer && (
									<UserInformation item={selectedCustomer} />
								)}
							</div>
						</div>
					</div>
				)}
			</div>

			{confirmationPopup && selectedCustomer && (
				<div className='fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50 px-4 md:px-0'>
					<div className='flex h-full w-full items-center justify-center'>
						<div className='flex h-auto w-auto flex-col gap-4 rounded-md bg-white p-4'>
							<div className='h-auto w-full items-center justify-between'>
								<h1 className='text-lg font-bold'>
									Konfirmasi Transaksi {selectedCustomer.nama}{' '}
									?
								</h1>
								<p>Bukti tiket akan dikirim ke pihak terkait</p>
							</div>
							<div className='flex h-auto w-full items-center justify-between gap-4'>
								<button
									className='flex h-fit items-center justify-between gap-2 rounded-md border-[1px] border-gray-500/50 bg-gray-400 px-4 py-1 font-bold text-white hover:bg-gray-500'
									onClick={() => setConfirmationPopup(false)}
								>
									<X size={20} />
									<span>Cancel</span>
								</button>
								<button
									className='flex h-fit items-center justify-between gap-2 rounded-md border-[1px] border-gray-500/50 bg-green-500 px-4 py-1 font-bold text-white hover:bg-green-600'
									onClick={() => handleVerify()}
								>
									<Check size={20} />
									<span>Verify</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{imagePopup && selectedCustomer && (
				<div className='fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
					<div className='flex h-[95%] w-full items-center justify-center'>
						<X
							className='absolute right-10 top-10 cursor-pointer'
							size={80}
							onClick={() => setImagePopup(false)}
						/>
						<img
							src={selectedCustomer.bukti_transaksi_url}
							alt=''
							className='h-full w-full object-contain'
						/>
					</div>
				</div>
			)}
		</>
	);
}
