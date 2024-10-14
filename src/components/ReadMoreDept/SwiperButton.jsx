import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { useSwiper } from 'swiper/react';
import 'swiper/css/navigation';

export default function SwiperButton({ listLength }) {
	const swiper = useSwiper();
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	useEffect(() => {
		const updateDisabledState = () => {
			setIsPrevDisabled(swiper.isBeginning);
			setIsNextDisabled(swiper.isEnd);
		};

		swiper.on('slideChange', updateDisabledState);

		// Initial state
		updateDisabledState();

		return () => {
			swiper.off('slideChange', updateDisabledState);
		};
	}, [swiper]);

	return (
		<div>
			{listLength > 1 && (
				<div className='absolute left-1/2 top-1/2 z-20 flex h-full w-[95%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-between sm:w-4/5 md:w-[70%] lg:w-[40%]'>
					<div
						className={`!top-0 !mt-0 flex !h-8 !w-12 justify-center rounded-3xl bg-[#293d26] py-2 ${
							isPrevDisabled
								? 'cursor-auto bg-opacity-25'
								: 'cursor-pointer bg-opacity-50'
						}`}
						onClick={() => !isPrevDisabled && swiper.slidePrev()}
					>
						<FaArrowLeft className='text-[#f6f3e4]' />
					</div>
					<div
						className={`!top-0 !mt-0 flex !h-8 !w-12 justify-center rounded-3xl bg-[#293d26] py-2 ${
							isNextDisabled
								? 'pointer-events-none cursor-auto opacity-25'
								: 'cursor-pointer bg-opacity-50'
						}`}
						onClick={() => !isNextDisabled && swiper.slideNext()}
					>
						<FaArrowRight className='text-[#f6f3e4]' />
					</div>
				</div>
			)}
		</div>
	);
}
