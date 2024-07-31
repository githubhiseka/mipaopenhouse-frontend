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
				{prospekList.map((prospek, index) => (
					<SwiperSlide
						key={index}
						className='align-center !flex h-[100%] items-center justify-center w-full'
					>
						<div
							className='relative z-10 flex h-24 w-2/3 items-center justify-center border-2 border-solid font-lato tracking-wider sm:w-4/5 xl:w-2/3'
							style={{ borderColor: strokeColor, backgroundColor: bgColor }}
						>
							<div
								className='absolute -left-0.5 -top-0.5 h-fit border-2 border-solid bg-transparent px-2 font-sunborn'
								style={{ borderColor: strokeColor, color: strokeColor }}
							>
								{index+1}
							</div>
							<p
								className='text-sm font-bold text-center'
								style={{ color: strokeColor }}
							>
								{prospek}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<img
				className='absolute -bottom-8 -left-24 z-0 w-1/2 sm:w-2/5 md:w-1/3 lg:-bottom-12 lg:w-[28%] xl:w-1/4'
				src={leaves}
			/>
		</div>
	);
};
export default ProspekKerja;
