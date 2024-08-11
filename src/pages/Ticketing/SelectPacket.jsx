import NextMap from '../../components/Ticketing/NextMap';
import ticketDesktopBg from '../../assets/ticketing/ticketDesktopBg.png';
import ticketMobileBg from '../../assets/ticketing/ticketMobileBg.png';
import only45k from '../../assets/ticketing/only45k.png';
import cn from 'classnames';
import { useState } from 'react';

function Packet({ packet, selected, onClick }) {
	return (
		<div
			className={cn(
				'flex h-[4.5rem] w-full cursor-pointer flex-col items-center justify-center border-4 border-[#223d23] bg-[#628938] bg-opacity-50 font-lato text-[#eaffd3] md:h-24',
				{
					'bg-[#eaffd3]': selected,
				}
			)}
			onClick={onClick}
		>
			<h1 className='text-2xl font-bold md:text-3xl'>{packet.name}</h1>
			<p>({packet.slot}) available slot left!</p>
		</div>
	);
}

export default function SelectPacket() {
	const [selectedPacket, setSelectedPacket] = useState(null);

	const packets1 = [
		{
			name: 'PAKET 1',
			slot: 50,
		},
		{
			name: 'PAKET 2',
			slot: 50,
		},
		{
			name: 'PAKET 3',
			slot: 50,
		},
		{
			name: 'PAKET 4',
			slot: 50,
		},
	];

	const packets2 = [
		{
			name: 'PAKET 5',
			slot: 50,
		},
		{
			name: 'PAKET 6',
			slot: 50,
		},
	];

	return (
		<div className='relative flex h-screen w-full items-start justify-center overflow-clip'>
			<div className='flex h-full w-[60%] flex-col items-center justify-start gap-10 py-[8vh] md:w-[75%] md:gap-20'>
				<div className='relative'>
					<h1 className='font-sunborn text-6xl leading-none text-[#defabf] drop-shadow-title'>
						PACKAGE
					</h1>
					<p className='text-center font-lato font-bold leading-none text-[#eaffd3]'>
						Select Yours
					</p>
					<img
						src={only45k}
						alt=''
						className='z-2 absolute bottom-[-10vw] right-[-8vw] w-24 -rotate-12 transform object-contain md:bottom-[-5vw] md:right-[-6vw] md:w-36'
					/>
				</div>
				<div className='mb-[20vw] flex h-full w-full flex-col gap-2 overflow-y-auto md:mb-0 md:flex-row md:gap-[8rem]'>
					<div className='flex w-full flex-col gap-2 md:h-full md:gap-4'>
						{packets1.map((packet, i) => (
							<Packet
								key={i}
								packet={packet}
								selected={selectedPacket === i}
								onClick={() => setSelectedPacket(i)}
							/>
						))}
					</div>
					<div className='flex w-full flex-col gap-2 md:h-full md:gap-4'>
						{packets2.map((packet, i) => (
							<Packet
								key={i}
								packet={packet}
								selected={
									selectedPacket === i + packets1.length
								}
								onClick={() =>
									setSelectedPacket(i + packets1.length)
								}
							/>
						))}
					</div>
				</div>
			</div>
			<img
				src={ticketDesktopBg}
				alt=''
				className='absolute z-[-1] hidden h-full w-full object-cover md:block'
			/>
			<img
				src={ticketMobileBg}
				alt=''
				className='absolute z-[-1] h-full w-full object-cover md:hidden'
			/>
			<NextMap />
		</div>
	);
}
