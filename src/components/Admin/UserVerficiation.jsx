import { Check, X } from 'lucide-react';

function UserVerification({ item, setPopup, setConfirmationPopup, setRejectPopUp }) {
	return (
		<div className='flex h-full w-full flex-col'>
			<div className='flex h-[90%] w-full flex-1 flex-col gap-4 px-8 py-4'>
				<h1 className='text-lato h-auto text-lg'>
					Bukti Pembayaran
					<span className='text-2xl font-bold'> {item.nama}</span>
				</h1>
				<div
					className='h-[85%] w-full rounded-md border-[1px] border-gray-500/50 bg-slate-50 p-1'
					onClick={() => setPopup(true)}>
					<img src={item.bukti_transaksi_url} alt='' className='h-full w-full object-contain' />
				</div>
			</div>
			{!item.verified && (
				<div className='flex h-full w-full items-center gap-4 border-t-[1px] border-gray-300/50 bg-gray-200/50 px-8'>
					<button
						className='flex h-fit items-center justify-between gap-2 rounded-md border-[1px] border-gray-500/50 bg-green-500 px-4 py-1 font-bold text-white'
						onClick={() => setConfirmationPopup(true)}>
						<Check size={20} />
						<span>Verify</span>
					</button>
					<button
						className='flex h-fit items-center justify-between gap-2 rounded-md border-[1px] border-gray-500/50 bg-red-500 px-4 py-1 font-bold text-white'
						onClick={() => setRejectPopUp(true)}>
						<X size={20} />
						<span>Reject</span>
					</button>
				</div>
			)}
		</div>
	);
}

export default UserVerification;
