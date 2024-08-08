import { useContext, useEffect, useState } from 'react';
import paymentDesktopBg from '../../assets/ticketing/paymentDesktopBg.png';
import paymentMobileBg from '../../assets/ticketing/paymentMobileBg.png';
import paymentSnake from '../../assets/ticketing/paymentSnake.png';
import NextMap from '../../components/Ticketing/NextMap';
import TicketPageContext from '../../contexts/TicketPageContext';
import { toast, Toaster } from 'sonner';
import cn from 'classnames';

export default function Payment() {
	const [selectedPayment, setSelectedPayment] = useState(null);
	const { setUserData, page, setPage } = useContext(TicketPageContext);

	useEffect(() => {
		setUserData((prev) => ({ ...prev, payment: selectedPayment }));
	}, [selectedPayment]);

	const handleNext = () => {
		if (selectedPayment === null) {
			toast.error('Harap Pilih Salah Satu Metode Pembayaran!');
			return;
		} else {
			setPage(page + 1);
		}
	};

	return (
		<div className='relative flex h-screen w-full items-start justify-center overflow-clip'>
			<Toaster
				richColors
				position='top-center'
			/>
			<div className='flex h-full w-[60%] flex-col items-center justify-start gap-10 py-[15vh] md:w-[70%] md:gap-20'>
				<h1
					className='font-sunborn text-6xl leading-none text-[#d7a66a]'
					style={{
						WebkitTextStrokeColor: '#402514',
						WebkitTextStrokeWidth: '3px',
					}}
				>
					PAYMENT
				</h1>
				<div className='z-10 flex h-full w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-center md:gap-10'>
					<div
						className={cn(
							'flex h-auto w-full cursor-pointer flex-col items-center justify-center border-4 border-[#8c5330] bg-[#b69a73] px-8 py-4 font-lato text-white md:w-1/3 md:px-20',
							{
								'bg-opacity-100': selectedPayment === 'bank',
								'bg-opacity-50': selectedPayment !== 'bank',
							}
						)}
						onClick={() => setSelectedPayment('bank')}
					>
						<h1 className='text-3xl font-bold md:text-5xl'>Bank</h1>
						<p className='text-center md:text-2xl'>
							nomor rekening a.n. Aisha Rajwa
						</p>
					</div>
					<div
						className={cn(
							'flex h-auto w-full cursor-pointer flex-col items-center justify-center border-4 border-[#8c5330] bg-[#b69a73] px-8 py-4 font-lato text-white md:w-1/3 md:px-20',
							{
								'bg-opacity-100':
									selectedPayment === 'e-wallet',
								'bg-opacity-50': selectedPayment !== 'e-wallet',
							}
						)}
						onClick={() => setSelectedPayment('e-wallet')}
					>
						<h1 className='text-center text-3xl font-bold md:text-5xl'>
							E-Wallet
						</h1>
						<p className='text-center md:text-2xl'>
							nomor rekening a.n. Aisha Rajwa
						</p>
					</div>
					<div
						className={cn(
							'flex h-auto w-full cursor-pointer flex-col items-center justify-center border-4 border-[#8c5330] bg-[#b69a73] px-8 py-4 font-lato text-white md:w-1/3 md:px-20',
							{
								'bg-opacity-100': selectedPayment === 'cash',
								'bg-opacity-50': selectedPayment !== 'cash',
							}
						)}
						onClick={() => setSelectedPayment('cash')}
					>
						<h1 className='text-3xl font-bold md:text-5xl'>Cash</h1>
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
