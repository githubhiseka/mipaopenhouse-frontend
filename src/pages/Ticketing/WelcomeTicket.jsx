// WelcomeTicket.js
import React, { useContext } from 'react';
import TicketPageContext from '../../contexts/TicketPageContext';
import welcomeDesktopBg from '../../assets/ticketing/welcomeDesktopBg.png';
import welcomeMobileBg from '../../assets/ticketing/welcomeMobileBg.png';
import ticketMap from '../../assets/ticketing/ticketMap.png';
import welcomeBird from '../../assets/ticketing/welcomeBird.png';
import welcomeBubbleText from '../../assets/ticketing/welcomeBubbleText.png';
import welcomeNextButton from '../../assets/ticketing/welcomeNextButton.png';

export default function WelcomeTicket() {
	const { page, setPage } = useContext(TicketPageContext);

	return (
		<div className='relative h-screen w-full overflow-hidden'>
			<img
				src={welcomeDesktopBg}
				alt=''
				className='z-[-1] hidden h-full w-full object-cover md:block'
			/>
			<img
				src={welcomeMobileBg}
				alt=''
				className='z-[-1] h-full w-full object-cover md:hidden'
			/>
			<div className='absolute left-1/2 top-1/2 h-[80%] w-full -translate-x-1/2 -translate-y-1/2 transform md:h-full'>
				<img
					src={ticketMap}
					alt=''
					className='h-full w-full object-cover md:translate-x-0 md:object-contain'
				/>
			</div>
			<img
				src={welcomeBird}
				alt=''
				className='absolute bottom-0 left-1/2 -translate-x-[65%] transform md:left-[8%] md:top-1/3 md:w-[37%] md:translate-x-0 md:translate-y-0'
			/>
			<div className='absolute left-[5%] top-1/3 w-[80%] -translate-y-1/2 transform md:left-1/2 md:top-1/3 md:w-[40%] md:-translate-x-1/2'>
				<div className='relative flex h-full w-full items-start justify-center font-lato'>
					<div className='absolute w-[90%] pt-[3vw] text-center text-[4vw] text-[#690a0a] md:w-[80%] md:text-[1.7vw]'>
						<p>
							Hai teman-teman! Untuk sementara waktu, tiket belum
							dapat dibeli. Tunggu info selanjutnya dari kami ya!
							Terima kasih! 🙏
						</p>
					</div>
					<img
						src={welcomeBubbleText}
						alt=''
						className='h-full w-full object-cover'
					/>
					{/* <img
						src={welcomeNextButton}
						alt=''
						className='absolute bottom-[10vw] right-[-4vw] w-[40%] cursor-pointer transition-all duration-300 ease-in-out md:bottom-[5.4vw] md:w-[30%] md:hover:right-[-5vw] md:hover:scale-105'
						onClick={() => setPage(page + 1)}
					/> */}
				</div>
			</div>
		</div>
	);
}
