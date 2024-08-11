import { useState } from 'react';
import moreinfoDesktopBg from '../../assets/ticketing/moreinfoDesktopBg.png';
import moreinfoMobileBg from '../../assets/ticketing/moreinfoMobileBg.png';
import moreinfoCrystal from '../../assets/ticketing/moreinfoCrystal.png';
import NextMap from '../../components/Ticketing/NextMap';

export default function MoreInfo() {
	return (
		<div className='relative flex h-screen w-full items-start justify-center overflow-clip'>
			<div className='flex h-full w-[70%] flex-col items-center justify-start gap-10 py-[10vh] md:w-[70%] md:gap-4'>
				<div>
					<p className='text-center font-sunborn text-5xl font-bold text-[#faf0c1] drop-shadow-title md:text-7xl'>
						FOR MORE INFO
					</p>
					<p className='text-center font-lato text-white md:text-2xl'>
						Selanjutnya, ketahui informasi lebih lanjut melalui:
					</p>
				</div>
				<div className='z-10 flex h-full w-full flex-col items-center justify-start gap-4 md:items-center md:justify-start md:gap-4'>
					<div className='relative flex h-auto w-full flex-col items-center justify-center border-4 border-[#8c5330] bg-[#b69a73] bg-opacity-50 px-4 py-4 font-lato text-white md:w-1/2 md:px-20 md:py-10'>
						<h1 className='text-center text-3xl font-bold md:text-5xl'>
							Grub
						</h1>
						<p className='text-center md:text-2xl'>Link Grub</p>
					</div>
					<div className='relative flex h-auto w-full flex-col items-center justify-center border-4 border-[#8c5330] bg-[#b69a73] bg-opacity-50 px-4 py-4 font-lato text-white md:w-1/2 md:px-20 md:py-10'>
						<h1 className='text-center text-3xl font-bold md:text-5xl'>
							Narahubung
						</h1>
						<p className='text-center md:text-2xl'>
							Alika (nomor/ID Line) Vanessa (nomor/ID Line)
						</p>
					</div>
				</div>
			</div>
			<img
				src={moreinfoDesktopBg}
				alt=''
				className='absolute left-0 top-0 z-[-1] hidden h-full w-full object-cover md:block'
			/>
			<img
				src={moreinfoMobileBg}
				alt=''
				className='absolute left-0 top-0 z-[-1] h-full w-full object-cover md:hidden'
			/>
			<img
				src={moreinfoCrystal}
				alt=''
				className='absolute bottom-[-20vw] left-[-10vw] z-20 h-1/3 rotate-12 transform object-contain md:bottom-[-8vw] md:left-[-3vw] md:block md:h-1/2 md:transform'
			/>
			<NextMap />
		</div>
	);
}
