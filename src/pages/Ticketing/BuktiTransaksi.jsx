import { useContext, useEffect, useState } from 'react';
import paymentDesktopBg from '../../assets/ticketing/paymentDesktopBg.png';
import paymentMobileBg from '../../assets/ticketing/paymentMobileBg.png';
import paymentSnake from '../../assets/ticketing/paymentSnake.png';
import NextMap from '../../components/Ticketing/NextMap';
import TicketPageContext from '../../contexts/TicketPageContext';
import useTicket from '../../hooks/useTicket';
import { toast, Toaster } from 'sonner';

export default function BuktiTransaksi() {
	const [file, setFile] = useState(null);
	const { userData, setUserData, page, setPage } = useContext(TicketPageContext);
	const { uploadImage, uploadPembayaran } = useTicket();

	const uploadFile = async () => {
		const imgUpload = await uploadImage(file);
		console.log('imgUpload', imgUpload);

		await setUserData((prev) => ({ ...prev, image: imgUpload.url }));

		const pembayaranResult = await uploadPembayaran({ userData, imgUrl: imgUpload.url });
		console.log(pembayaranResult);
	};

	const handleNext = async () => {
		if (!file) {
			toast.error('Harap Upload Bukti Transaksi!');
			return;
		}
		toast.promise(uploadFile(), {
			loading: 'Mengunggah Transaksi...',
			success: () => {
				setPage(page + 1);
				return 'Bukti Transaksi Berhasil Diunggah!';
			},
			error: 'Terjadi Kesalahan Saat Mengunggah Bukti Transaksi, Silahkan Coba Lagi!',
		});
	};

	return (
		<div className='relative flex h-screen w-full items-start justify-center overflow-clip'>
			<Toaster richColors position='top-center' />
			<div className='flex h-full w-[60%] flex-col items-center justify-start gap-10 py-[15vh] md:w-[70%] md:gap-20'>
				<h1
					className='text-center font-sunborn text-6xl leading-none text-[#d7a66a]'
					style={{
						WebkitTextStrokeColor: '#402514',
						WebkitTextStrokeWidth: '3px',
					}}>
					BUKTI <br /> TRANSAKSI
				</h1>
				<div className='z-10 flex h-full w-full flex-col items-center justify-start gap-4 md:flex-row md:items-start md:justify-center md:gap-10'>
					<div className='relative flex h-auto w-full max-w-[40vh] flex-col items-center justify-center border-4 border-[#8c5330] bg-[#b69a73] bg-opacity-50 px-4 py-4 font-lato text-white md:w-1/2 md:px-20 md:py-10'>
						<input
							type='file'
							size={1572864}
							accept='image/*'
							className='absolute h-full w-full cursor-pointer opacity-0'
							onChange={(e) => setFile(e.target.files[0])}
						/>
						{file ? (
							<img src={URL.createObjectURL(file)} alt='' className='h-full w-full object-contain' />
						) : (
							<>
								{' '}
								<h1 className='text-center text-3xl font-bold md:text-5xl'>Bukti Transaksi</h1>
								<p className='text-center md:text-2xl'>Screenshoot/foto pembayaran</p>
								<p>Max File 1.5MB</p>
							</>
						)}
					</div>
				</div>
			</div>
			<img
				src={paymentDesktopBg}
				alt=''
				className='absolute left-0 top-0 z-[-1] hidden h-full w-full object-cover md:block'
			/>
			<img
				src={paymentMobileBg}
				alt=''
				className='absolute left-0 top-0 z-[-1] h-full w-full object-cover md:hidden'
			/>
			<img
				src={paymentSnake}
				alt=''
				className='absolute bottom-[30vw] right-[-20vw] h-1/3 object-contain md:bottom-0 md:left-[-10vw] md:block md:h-2/3 md:-scale-x-100 md:transform'
			/>
			<NextMap nextFunction={handleNext} />
		</div>
	);
}
