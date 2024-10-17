import cn from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { FaEllipsis } from 'react-icons/fa6';

export default function TableCell({ item, setSelected, selectedCustomer, handleDelete }) {
	const [showPopUp, setShowPopUp] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);
	const [showDetail, setShowDetail] = useState(false);
	const popUpRef = useRef(null);

	console.log(selectedCustomer);

	const formatDate = (dateString) => {
		// Parse the input date-time string
		const date = new Date(dateString);

		// Define the UTC+7 offset in milliseconds
		const offsetWIB = 7 * 60 * 60 * 1000;

		// Create a new date by adding the offset
		const dateWIB = new Date(date.getTime() + offsetWIB);

		// Extract date components in WIB timezone
		const day = String(dateWIB.getUTCDate()).padStart(2, '0');
		const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const month = monthNames[dateWIB.getUTCMonth()];
		const year = dateWIB.getUTCFullYear();

		const hours = String(dateWIB.getUTCHours()).padStart(2, '0');
		const minutes = String(dateWIB.getUTCMinutes()).padStart(2, '0');

		return `${day} ${month} ${year}, ${hours}:${minutes} WIB`;
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (popUpRef.current && !popUpRef.current.contains(event.target)) {
				setShowPopUp(false);
			}
		};

		if (showPopUp) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showPopUp]);

	return (
		<>
			<tr
				className={cn(
					'h-16 cursor-default border-b-2 border-gray-400 border-opacity-20 text-black hover:bg-gray-300/30',
					selectedCustomer !== null && selectedCustomer.id === item.id && 'bg-gray-300/60'
				)}
				onClick={() => setSelected(item)}>
				<td className='truncate px-4'>{item.nama}</td>
				<td className='hidden truncate md:table-cell'>{item.email}</td>
				<td className='hidden truncate md:table-cell'>{formatDate(item.created_at)}</td>
				<td className='truncate'>{item.paket}</td>
				<td className='truncate'>{item.bundle}</td>
				<td className='hidden items-center truncate md:table-cell'>
					<div
						className={cn(
							'w-20 rounded-full px-2 py-1 text-center text-sm font-bold text-white',
							item.status === 'verified' && 'bg-green-500',
							item.status === 'pending' && 'bg-gray-500',
							item.status === 'rejected' && 'bg-red-500'
						)}>
						{item.status}
					</div>
				</td>
				<td className='relative'>
					<FaEllipsis className='cursor-pointer text-gray-500' onClick={() => setShowPopUp(!showPopUp)} />
					{showPopUp && (
						<div
							ref={popUpRef}
							className='absolute right-[100%] top-10 z-20 flex w-32 flex-col items-start rounded-sm bg-gray-700 shadow-xl'>
							<p
								className='w-full p-2 pr-4 text-white hover:bg-gray-600'
								onClick={() => setShowDetail(true)}>
								Show Detail
							</p>
							<p
								className='w-full p-2 pr-4 text-white hover:bg-gray-600'
								onClick={() => setConfirmDelete(true)}>
								Delete
							</p>
						</div>
					)}
				</td>
			</tr>

			{showDetail && (
				<div className='fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
					<div className='flex h-auto w-auto flex-col gap-4 rounded-md bg-white p-4'>
						<h1 className='text-lg font-bold'>Detail {selectedCustomer.nama}</h1>
						<div className='flex flex-col gap-2'>
							<p>
								<span className='font-bold'>Email:</span> {selectedCustomer.email}
							</p>
							<p>
								<span className='font-bold'>Kontak:</span> {selectedCustomer.kontak}
							</p>
							<p>
								<span className='font-bold'>Asal Sekolah:</span> {selectedCustomer.asal_sekolah}
							</p>
							<p>
								<span className='font-bold'>Kelas:</span> {selectedCustomer.kelas}
							</p>
							<p>
								<span className='font-bold'>Paket:</span> {selectedCustomer.paket}
							</p>
							<p>
								<span className='font-bold'>Metode:</span> {selectedCustomer.metode}
							</p>
							<p>
								<span className='font-bold'>Status:</span> {selectedCustomer.status}
							</p>
							<p>
								<span className='font-bold'>KodeReveal:</span> {selectedCustomer.kode_reveal || '-'}
							</p>
							<div>
								<span className='font-bold'>Bukti Transaksi:</span>{' '}
								<a
									className='cursor-pointer underline'
									href={selectedCustomer.bukti_transaksi_url}
									target='_blank'
									rel='noreferrer noopener'>
									here
								</a>
							</div>
						</div>
						<button
							className='flex h-fit items-center justify-center gap-2 rounded-md border-[1px] border-gray-500/50 bg-gray-400 px-4 py-1 font-bold text-white hover:bg-gray-500'
							onClick={() => setShowDetail(false)}>
							<span>Close</span>
						</button>
					</div>
				</div>
			)}

			{confirmDelete && (
				<div className='fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
					<div className='flex h-auto w-auto flex-col gap-4 rounded-md bg-white p-4'>
						<h1 className='text-lg font-bold'>Delete {selectedCustomer.nama} ?</h1>
						<p>This action cannot be undone</p>
						<div className='flex h-auto w-full items-center justify-between gap-4'>
							<button
								className='flex h-fit items-center justify-between gap-2 rounded-md border-[1px] border-gray-500/50 bg-gray-400 px-4 py-1 font-bold text-white hover:bg-gray-500'
								onClick={() => setConfirmDelete(false)}>
								<span>Cancel</span>
							</button>
							<button
								className='flex h-fit items-center justify-between gap-2 rounded-md border-[1px] border-gray-500/50 bg-red-500 px-4 py-1 font-bold text-white hover:bg-red-600'
								onClick={() => {
									handleDelete(selectedCustomer.id);
									setConfirmDelete(false);
								}}>
								<span>Delete</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
