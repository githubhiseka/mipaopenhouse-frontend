import { useContext } from 'react';
import nextButton from '../../assets/ticketing/nextButton.webp';
import nextMap from '../../assets/ticketing/nextMap.webp';
import TicketPageContext from '../../contexts/TicketPageContext';

export default function NextMap({ nextFunction, showKetentuan }) {
	const { setPage, page } = useContext(TicketPageContext);
	return (
		<div className='absolute bottom-[-40vw] right-[-10vw] h-auto w-full md:bottom-[-25vw] md:w-[60%]'>
			<div className='relative h-full w-full'>
				{showKetentuan && (
					<p className='absolute left-[-7vw] top-[-15vw] -rotate-6 transform text-[#eaffd3] md:fixed md:left-[1vw] md:top-[96%] md:rotate-0 md:text-lg'>
						*Berlaku untuk 50 pembeli pertama
					</p>
				)}
				<img
					src={nextMap}
					alt=''
					className='h-full w-full -rotate-6 scale-125 transform object-cover md:rotate-[-20deg] md:scale-100 md:object-contain'
				/>
				<img
					src={nextButton}
					alt=''
					className='absolute right-[15vw] top-[6vw] z-20 w-[30%] cursor-pointer transition-all duration-300 ease-in-out md:w-[20%] md:hover:scale-105'
					onClick={nextFunction || (() => setPage(page + 1))}
				/>
			</div>
		</div>
	);
}
