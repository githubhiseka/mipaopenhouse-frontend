import React, { useEffect, useRef } from 'react';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { EffectCoverflow, Mousewheel, Navigation } from 'swiper/modules';

const ProspekKerja = ({ bgColor, strokeColor, prospekList, leaves }) => {
	return (
		<div className='relative flex w-full flex-col items-center justify-center gap-6 bg-[#f6f3e4] py-8 pb-32'>
			<p
				className='font-sunborn text-3xl text-transparent'
				style={{
					WebkitTextStrokeColor: strokeColor,
					WebkitTextStrokeWidth: '1.75px',
				}}
			>
				PROSPEK KERJA
			</p>

			<Swiper
				effect='coverflow'
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={1}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 40,
					modifier: 3,
					slideShadows: false,
				}}
				spaceBetween={100}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
				}}
				className='h-[75%] w-screen md:!w-full'
				initialSlide={0}
				modules={[EffectCoverflow, Mousewheel, Navigation]}
				navigation={{
					nextEl: '.swiper-button-next-pk',
					prevEl: '.swiper-button-prev-pk',
				}}
			>
				{prospekList.map((prospek, index) => (
					<SwiperSlide
						key={index}
						// className={`align-center !flex h-[100%] w-full items-center justify-center transition-opacity duration-900 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
						className='align-center !flex h-[100%] w-full items-center justify-center'
					>
						<div
							className='relative z-10 flex h-24 w-3/5 items-center justify-center border-2 border-solid font-lato tracking-wider md:w-1/2 lg:w-[35%] xl:w-1/4'
							style={{
								borderColor: strokeColor,
								backgroundColor: bgColor,
							}}
						>
							<div
								className='absolute -left-0.5 -top-0.5 h-fit border-2 border-solid bg-transparent px-2 font-sunborn'
								style={{
									borderColor: strokeColor,
									color: strokeColor,
								}}
							>
								{index + 1}
							</div>
							<p
								className='text-center text-sm font-bold'
								style={{ color: strokeColor }}
							>
								{prospek}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='absolute top-32 flex w-[95%] justify-between sm:w-4/5 md:w-4/6 lg:w-[38%]'>
				<div className='swiper-button-prev-pk relative flex !h-8 !w-12 cursor-pointer justify-center rounded-3xl bg-[#293d26] bg-opacity-50 py-2'>
					<FaArrowLeft className='text-[#f6f3e4]' />
				</div>
				<div className='swiper-button-next-pk relative flex !h-8 !w-12 cursor-pointer justify-center rounded-3xl bg-[#293d26] bg-opacity-50 py-2 text-[#283c26]'>
					<FaArrowRight className='text-[#f6f3e4]' />
				</div>
			</div>

			<img
				className='absolute -bottom-8 -left-24 z-0 w-1/2 sm:w-2/5 md:w-1/3 lg:-bottom-12 lg:w-[28%] xl:w-1/4'
				src={leaves}
			/>
		</div>
	);
};
export default ProspekKerja;
