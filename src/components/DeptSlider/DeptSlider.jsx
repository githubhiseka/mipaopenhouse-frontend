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
	return (
		<div className='flex h-[90vh] !w-full flex-col !items-center !justify-center bg-[#f7f3e4] !relative pt-[16vh]'>
			<div className='text-center absolute z-20 top-0'>
				<p
					className='text-[#f7f3e4] font-black text-7xl font-sunborn'
					style={{
						WebkitTextStrokeColor: '#440A00',
						WebkitTextStrokeWidth: '0.3px',
					}}
				>
					DEPARTMENTS
				</p>
				<p className='text-[#440A00] italic font-bold text-2xl'>
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
				<div className='swiper-button-prev relative !h-12 !w-32 cursor-pointer rounded-3xl bg-[#283c26] bg-opacity-50 py-2 '>
					<FaArrowLeft className='text-[#283c26]' />
				</div>
				<div className='swiper-button-next text-[#283c26]] relative !h-12 !w-32 cursor-pointer rounded-3xl bg-[#283c26] bg-opacity-50 py-2 '>
					<FaArrowRight className='text-[#283c26]' />
				</div>
			</div>
		</div>
	);
}

export default DeptSlider;
