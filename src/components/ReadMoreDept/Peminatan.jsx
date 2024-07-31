import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { EffectCoverflow, Mousewheel, Navigation } from 'swiper/modules';

const Peminatan = ({ bgColor, strokeColor, borderColor, peminatanList }) => {
	return (
		<div className='z-0 flex w-full flex-col items-center justify-center gap-2 bg-[#f6f3e4] py-8'>
			<p
				className='mb-3 mt-6 font-sunborn text-3xl text-transparent'
				style={{
					WebkitTextStrokeColor: strokeColor,
					WebkitTextStrokeWidth: '1.75px',
				}}
			>
				PEMINATAN
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

				{peminatanList.map((peminatan, peminatanIndex) => (
					<SwiperSlide
						key={peminatanIndex}
						className='align-center !flex flex-col h-[100%] items-center gap-2 justify-center w-full'
					>
						<p
							className='font-lato font-semibold tracking-wider'
							style={{ color: strokeColor }}
						>
						{peminatan.title}
						</p>

						{peminatan.items.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className='relative flex w-3/5 rounded-full border-2 border-solid font-lato font-semibold tracking-wider sm:w-11/12 lg:w-2/3'
								style={{
									backgroundColor: bgColor,
									borderColor: borderColor,
									color: strokeColor,
								}}
							>
								<div
									className='absolute -left-0.5 -top-0.5 rounded-full border-2 border-solid bg-[#f6f3e4] px-2'
									style={{ borderColor: strokeColor }}
								>
									{itemIndex + 1}
								</div>
								<p className='mx-auto px-8 text-center'>{item}</p>
							</div>
						))}
					</SwiperSlide>
				))}
			</Swiper>
			
		</div>
	);
};
export default Peminatan;
