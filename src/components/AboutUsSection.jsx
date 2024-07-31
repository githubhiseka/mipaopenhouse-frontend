import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import owl from '../assets/owl.svg';

const AboutUsSection = () => {
	const [viewportMargin, setViewportMargin] = useState('-80px');

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				// For md and larger devices
				setViewportMargin('-80px');
			} else {
				// For smaller devices
				setViewportMargin('-100px');
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
		<div
			id='about-us-section'
			className='flex w-full max-w-full flex-col-reverse justify-center overflow-hidden bg-[#FFE37F] pt-20 md:flex-row md:pt-[27vh] xl:pt-[39vh]'
		>
			<motion.img
				className='mt-10 h-96 md:mt-0'
				src={owl}
				alt='Owl'
				initial={{ opacity: 0, x: '-100px' }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ margin: viewportMargin, once: false }}
			/>
			<motion.div
				className='w-100 md:ml-32 md:w-96'
				initial={{ opacity: 0, x: '100px' }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ margin: viewportMargin, once: false }}
			>
				<p className='font-regular pt-12 text-center font-sunborn text-6xl text-[#283C26] md:text-left md:text-7xl'>
					ABOUT US
				</p>
				<p className='px-8 pt-6 text-justify text-xl font-normal text-[#283C26] md:px-0'>
					“MIPA Open House” adalah program BEM FMIPA UI yang
					memperkenalkan kampus dan kehidupan mahasiswa kepada siswa
					SMA. Acara ini mencakup tur kampus, seminar, workshop, dan
					Intip Departemen.
				</p>
			</motion.div>
		</div>
	);
};

export default AboutUsSection;
