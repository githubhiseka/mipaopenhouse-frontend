import tatacaraDesktopBg from '../../assets/ticketing/tatacaraDesktopBg.webp';
import tatacaraMobileBg from '../../assets/ticketing/tatacaraMobileBg.webp';
import tatacaraFlamingo from '../../assets/ticketing/tatacaraFlamingo.webp';
import tatacaraCactus from '../../assets/ticketing/tatacaraCactus.webp';
import tatacaraNextButton from '../../assets/ticketing/tatacaraNextButton.webp';
import tatacaraLeaves from '../../assets/ticketing/tatacaraLeaves.webp';
import { useContext } from 'react';
import TicketPageContext from '../../contexts/TicketPageContext';

export default function TataCara() {
	const { page, setPage } = useContext(TicketPageContext);

	return (
		<div className='relative flex h-screen w-full items-center justify-center overflow-clip'>
			<div className='relative z-20 flex h-auto w-10/12 flex-col items-start justify-between gap-8 border-[5px] border-[#223d23] border-opacity-50 bg-[#628938] bg-opacity-60 p-6 px-[10vw] pb-10 md:w-8/12 md:p-8 md:px-[5vw]'>
				<h1 className='self-center text-center font-sunborn text-[7vw] leading-none text-white md:text-[2.7vw]'>
					TATA CARA
					<br />
					PEMBELIAN TIKET
				</h1>
				<ol className='list-disc font-lato text-[#223d23] md:text-[1.7vw]'>
					<li>Masukkan data diri setelah laman tata cara</li>
					<li>Pilih paket yang kamu mau</li>
					<li>Pilih pembayaran</li>
					<li>Lakukan pembayaran melalui e-wallet/cash</li>
					<li>Screenshot atau foto pembelian tiket</li>
					<li>Masuk ke dalam link groupchat yang tersedia</li>
					<li>Email akan dikirim H-7 sebelum acara Main Event</li>
				</ol>
				<img
					src={tatacaraNextButton}
					alt=''
					className='absolute bottom-[-8vw] right-[-6vw] w-[40%] cursor-pointer transition-all duration-300 ease-in-out md:bottom-[-3vw] md:right-0 md:w-[17%] hover:scale-110 scale-[80%] md:scale-100'
					onClick={() => setPage(page + 1)}
				/>
			</div>
			<img
				src={tatacaraLeaves}
				alt=''
				className='absolute top-[-10vw] h-auto w-full scale-[300%] transform object-contain md:top-[-22vw] md:scale-[125%]'
			/>
			<img
				src={tatacaraDesktopBg}
				alt=''
				className='absolute z-[-1] hidden h-full w-full object-cover md:block'
			/>
			<img
				src={tatacaraMobileBg}
				alt=''
				className='absolute z-[-1] h-full w-full object-cover md:hidden'
			/>
			<img
				src={tatacaraFlamingo}
				alt=''
				className='absolute bottom-[-50vw] right-[-28vw] w-[80%] transform md:bottom-[-20vw] md:right-[-8vw] md:w-[30%] md:translate-y-0'
			/>
			<img
				src={tatacaraCactus}
				alt=''
				className='absolute bottom-0 left-[-7vw] w-[30%] transform md:left-[2vw] md:w-[10%]'
			/>
		</div>
	);
}
