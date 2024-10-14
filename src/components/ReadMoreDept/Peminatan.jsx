import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { EffectCoverflow, Mousewheel, Navigation } from 'swiper/modules';
import SwiperButton from './SwiperButton';

const Peminatan = ({ bgColor, strokeColor, borderColor, peminatanList }) => {
	return (
		<div className='relative z-0 flex w-full flex-col items-center justify-center gap-2 bg-[#f6f3e4] py-8'>
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
						slidesPerView: 1,
					},
				}}
				className='h-[75%] w-screen md:!w-full'
				initialSlide={0}
				modules={[EffectCoverflow, Mousewheel, Navigation]}
			>
				{peminatanList.map((peminatan, peminatanIndex) => (
					<SwiperSlide
						key={peminatanIndex}
						className='align-center !flex h-[100%] w-full flex-col items-center justify-center gap-2'
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
								className='relative flex w-3/5 rounded-full border-2 border-solid font-lato font-semibold tracking-wider md:w-1/2 lg:w-1/4'
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
								<p className='mx-auto px-8 text-center'>
									{item}
								</p>
							</div>
						))}
					</SwiperSlide>
				))}
				<SwiperButton listLength={peminatanList.length} />
			</Swiper>
			{/* <div className='absolute top-44 flex w-[95%] justify-between sm:w-4/5 md:w-4/6 lg:w-[38%]'>
				<div className='swiper-button-prev relative flex !h-8 !w-12 cursor-pointer justify-center rounded-3xl bg-[#293d26] bg-opacity-50 py-2'>
					<FaArrowLeft className='text-[#f6f3e4]' />
				</div>
				<div className='swiper-button-next relative flex !h-8 !w-12 cursor-pointer justify-center rounded-3xl bg-[#293d26] bg-opacity-50 py-2'>
					<FaArrowRight className='text-[#f6f3e4]' />
				</div>
			</div> */}
		</div>
	);
};
export default Peminatan;
