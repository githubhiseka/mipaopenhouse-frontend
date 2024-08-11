import NextMap from '../../components/Ticketing/NextMap';
import ticketDesktopBg from '../../assets/ticketing/ticketDesktopBg.png';
import ticketMobileBg from '../../assets/ticketing/ticketMobileBg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import packageData from '../../data/packageData';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function SwiperCard({ data }) {
	return (
		<div className='flex h-full w-full items-center justify-center pb-8'>
			<div className='flex h-full w-full flex-col items-center justify-start gap-6 overflow-y-auto border-4 border-[#223d23] bg-[#628938] bg-opacity-50 px-8 py-4 font-lato text-white md:w-2/3 md:px-16'>
				<h1 className='text-2xl font-bold tracking-wider md:text-3xl'>
					PAKET {data.paket}
				</h1>
				<div className='text-center'>
					<h1 className='text-xl font-bold leading-none md:text-2xl'>
						{data.praktikum[0].nama}
					</h1>
					<p className='md:text-md text-sm leading-none'>
						{data.praktikum[0].deskripsi}
					</p>
				</div>
				<div className='text-center'>
					<h1 className='text-xl font-bold leading-none md:text-2xl'>
						{data.praktikum[1].nama}
					</h1>
					<p className='md:text-md text-sm leading-none'>
						{data.praktikum[1].deskripsi}
					</p>
				</div>
			</div>
		</div>
	);
}

export default function PenjelasanPacket() {
	return (
		<div className='relative flex h-screen w-full items-start justify-center overflow-clip'>
			<div className='flex h-full w-full flex-col items-center justify-start gap-20 py-[8vh]'>
				<div>
					<h1 className='font-sunborn text-6xl leading-none text-[#defabf] drop-shadow-title'>
						PACKAGE
					</h1>
					<p className='text-center font-lato font-bold leading-none text-[#eaffd3]'>
						Be Wise!
					</p>
				</div>
				<Swiper
					slidesPerView={1}
					grabCursor={true}
					spaceBetween={30}
					className='h-[67%] w-[70%] md:h-[53%] md:w-[75%]'
					modules={[Pagination]}
					pagination={{
						clickable: true,
						bulletClass: 'swiper-pagination-bullet',
						bulletActiveClass: 'swiper-pagination-bullet-active',
					}}
				>
					<SwiperSlide>
						<div className='flex h-full w-full items-center justify-center pb-8'>
							<div className='flex h-full w-full flex-col items-center justify-center gap-6 border-4 border-[#223d23] bg-[#628938] bg-opacity-50 px-8 py-4 font-sunborn text-[#eaffd3] md:w-2/3 md:px-20'>
								<h1 className='text-center text-[8vw] font-bold tracking-widest md:text-3xl'>
									get to know the right package for you
								</h1>
							</div>
						</div>
					</SwiperSlide>
					{packageData.map((data, index) => (
						<SwiperSlide key={index}>
							<SwiperCard data={data} />
						</SwiperSlide>
					))}
				</Swiper>
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
