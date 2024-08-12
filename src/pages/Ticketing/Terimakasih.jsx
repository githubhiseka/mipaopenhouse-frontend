// WelcomeTicket.js
import React, { useContext } from 'react';
import TicketPageContext from '../../contexts/TicketPageContext';
import welcomeDesktopBg from '../../assets/ticketing/welcomeDesktopBg.webp';
import welcomeMobileBg from '../../assets/ticketing/welcomeMobileBg.webp';
import ticketMap from '../../assets/ticketing/terimakasihMap.webp';
import welcomeBird from '../../assets/ticketing/terimakasihBird.webp';
import welcomeBubbleText from '../../assets/ticketing/welcomeBubbleText.webp';
import followForMore from '../../assets/ticketing/terimakasihFollow.webp';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/backArrow.webp';

export default function Terimakasih() {
	const navigate = useNavigate();

	return (
		<div className='relative h-screen w-full overflow-hidden'>
			<img src={welcomeDesktopBg} alt='' className='z-[-1] hidden h-full w-full object-cover md:block' />
			<img src={welcomeMobileBg} alt='' className='z-[-1] h-full w-full object-cover md:hidden' />
			<div className='absolute left-1/2 top-1/2 h-[80%] w-full -translate-x-1/2 -translate-y-1/2 transform md:h-full'>
				<img src={ticketMap} alt='' className='h-full w-full object-cover md:translate-x-0 md:object-contain' />
			</div>
			<img
				src={welcomeBird}
				alt=''
				className='absolute bottom-[-1vh] left-[27vw] w-[60%] -translate-x-[65%] transform md:left-[15%] md:top-[40vh] md:w-[20%] md:translate-x-0 md:translate-y-0'
			/>
			<div className='absolute left-[5%] top-1/3 flex w-[80%] -translate-y-1/2 transform md:left-1/2 md:top-1/3 md:w-[40%] md:-translate-x-1/2'>
				<div className='relative flex h-full w-full items-start justify-center font-lato'>
					<div className='absolute w-[90%] pt-[3vw] text-center text-[4vw] text-[#690a0a] md:w-[80%] md:text-[1.7vw]'>
						<p className='text-2xl font-bold'>Terima Kasih!</p>
						<p>Terima kasih sudah menjadi bagian dari MIPA Open House! Until next time!</p>
					</div>
					<img src={welcomeBubbleText} alt='' className='h-full w-full object-cover' />
					<a href='https://www.instagram.com/mipaopenhouse/'>
						<img
							src={followForMore}
							alt=''
							className='bottom-0 hidden aspect-auto w-2/3 md:absolute md:top-[100%] md:block'
						/>
					</a>
				</div>
			</div>
			<img
				src={followForMore}
				alt=''
				className='absolute bottom-[25vw] right-[1vw] block aspect-auto w-[60%] md:top-[100%] md:hidden'
			/>
		</div>
	);
}
