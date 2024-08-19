// WelcomeTicket.js
import React, { useContext } from 'react';
import TicketPageContext from '../../contexts/TicketPageContext';
import welcomeDesktopBg from '../../assets/ticketing/welcomeDesktopBg.webp';
import welcomeMobileBg from '../../assets/ticketing/welcomeMobileBg.webp';
import ticketMap from '../../assets/ticketing/ticketMap.webp';
import welcomeBird from '../../assets/ticketing/welcomeBird.png';
import welcomeBubbleText from '../../assets/ticketing/welcomeBubbleText.webp';
import welcomeNextButton from '../../assets/ticketing/welcomeNextButton.webp';

export default function WelcomeTicket() {
	const { page, setPage } = useContext(TicketPageContext);

	return (
		<div className='relative h-screen w-full overflow-hidden'>
			<img src={welcomeDesktopBg} alt='' className='z-[-1] hidden h-full w-full object-cover md:block' />
			<img src={welcomeMobileBg} alt='' className='z-[-1] h-full w-full object-cover md:hidden' />
			<div className='absolute left-1/2 top-1/2 h-[80%] w-full -translate-x-1/2 -translate-y-1/2 transform md:h-full'>
				<img src={ticketMap} alt='' className='h-full w-full object-cover md:translate-x-0 md:object-contain' />
			</div>
			<div className='absolute left-[5%] top-1/3 w-[80%] -translate-y-1/2 transform md:left-1/2 md:top-1/3 md:w-[40%] md:-translate-x-1/2'>
				<div className='relative flex h-full w-full items-start justify-center font-lato'>
					<img src={welcomeBird} alt='' className='absolute right-[10vw] top-[20vh] -z-10 scale-110' />
					<div className='absolute w-[90%] pt-[3vw] text-center text-[4vw] text-[#690a0a] md:w-[80%] md:text-[1.7vw]'>
						<p className='font-bold'>
							Hai teman-teman! Terima kasih telah menuju gerbang masuk dunia penjelajah, ayo simak dulu
							tata cara pembelian tiketnya ya!
						</p>
					</div>
					<img src={welcomeBubbleText} alt='' className='h-full w-full object-cover' />
					<img
						src={welcomeNextButton}
						alt=''
						className='absolute bottom-[9vw] right-[-15vw] w-[40%] scale-[80%] cursor-pointer transition-all duration-200 ease-in-out md:bottom-[5.4vw] md:right-[-4vw] md:w-[30%] md:scale-100 hover:scale-110'
						onClick={() => setPage(page + 1)}
					/>
				</div>
			</div>
		</div>
	);
}
