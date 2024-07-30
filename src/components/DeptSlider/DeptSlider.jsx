import React, { useEffect, useState } from 'react';

import DeptCards from './DeptCards';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { EffectCoverflow, Mousewheel, Navigation } from 'swiper/modules';
import cardsData from '../../data/cardsData';

function DeptSlider() {
	const [strokeWidth, setStrokeWidth] = useState('0.3px');

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				// For md and larger devices
				setStrokeWidth('0.3px');
			} else {
				// For smaller devices
				setStrokeWidth('1.3px');
			}
		};

		// Set the initial viewport margin
		handleResize();

		// Add event listener for window resize
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='!relative flex h-[90vh] !w-full flex-col !items-center !justify-center bg-[#f7f3e4] pt-[16vh]'>
			<div id='dept-slider' className='absolute -top-10' /> {/* Scroll pin point */}
			<div className='absolute md:top-0 top-14 z-20 text-center'>
				<p
					className='font-sunborn md:text-7xl text-5xl font-black text-[#f7f3e4]'
					style={{
						WebkitTextStrokeColor: '#440A00',
						WebkitTextStrokeWidth: strokeWidth,
					}}
				>
					DEPARTMENTS
				</p>
				<p className='text-2xl font-bold italic text-[#440A00]'>
					Be Wise, Choose Your True Self
				</p>
			</div>
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
				spaceBetween={0}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
				}}
				className='h-[75%] w-screen md:!w-full'
				initialSlide={0}
				modules={[EffectCoverflow, Mousewheel, Navigation]}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
			>
				{cardsData.map((card, index) => (
					<SwiperSlide
						key={index}
						className='align-center !flex h-[100%] items-center justify-center'
					>
						<DeptCards
							bgColor={card.bgColor}
							imgSrc={card.imgSrc}
							title={card.title}
							desc={card.desc}
							btnHref={card.btnHref}
							titleColor={card.titleColor}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='mt-10 flex w-full justify-between px-1 md:mt-12 md:px-20'>
				<div className='swiper-button-prev relative !h-12 !w-32 cursor-pointer rounded-3xl bg-[#283c26] bg-opacity-50 py-2'>
					<FaArrowLeft className='text-[#283c26]' />
				</div>
				<div className='swiper-button-next text-[#283c26]] relative !h-12 !w-32 cursor-pointer rounded-3xl bg-[#283c26] bg-opacity-50 py-2'>
					<FaArrowRight className='text-[#283c26]' />
				</div>
			</div>
		</div>
	);
}

export default DeptSlider;
