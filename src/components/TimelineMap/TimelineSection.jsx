import React, { useEffect, useState } from 'react';

import map from '../../assets/map.png';
import MapBox from './MapBox';

const TimelineSection = () => {
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
		<div className='relative z-10 flex h-auto w-full bg-[#f7f3e4]'>
			<div
				id='timeline-section'
				className='absolute -top-32'
			/>{' '}
			{/* Scroll pin point */}
			<img
				className='z-12 -mb-[12vh] -mt-[7vh] w-full'
				src={map}
				alt='Map Timeline'
			/>
			<p
				className='absolute left-[5%] top-[-5%] font-sunborn text-5xl font-black text-[#FFE37F] md:left-[10%] md:top-[4%] md:text-7xl'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: strokeWidth,
				}}
			>
				OUR TIMELINE
			</p>
			<MapBox
				xPos='md:right-[13%]'
				yPos='md:top-[10%]'
				xPosMobile='right-[3%]'
				yPosMobile='top-[3.6%]'
				title1='MIPA OPEN'
				title2='HOUSE'
				subtitle='September - November 2024'
				num='1'
				numPos='md:-right-1'
				numPosMobile='-right-0.5'
			/>
			<MapBox
				xPos='md:left-[14%]'
				yPos='md:top-[24%]'
				xPosMobile='left-[3%]'
				yPosMobile='top-[21%]'
				title1='MIPA ON'
				title2='THE WAY'
				subtitle='12 Agustus - 7 September 2024'
				num='2'
				numPos='md:-left-1'
				numPosMobile='-left-0.5'
			/>
			<MapBox
				xPos='md:right-[9%]'
				yPos='md:top-[41%]'
				xPosMobile='right-[5%]'
				yPosMobile='top-[40%]'
				title1='BEYOND THE'
				title2='BOOKS'
				subtitle='9 November 2024'
				num='3'
				numPos='md:-right-1'
				numPosMobile='-right-0.5'
			/>
			<MapBox
				xPos='md:left-[9%]'
				yPos='md:top-[49.8%]'
				xPosMobile='left-[3%]'
				yPosMobile='top-[51%]'
				title1='MAPPING'
				title2='YOUR WAY'
				subtitle='9 November 2024'
				num='4'
				numPos='md:-left-1'
				numPosMobile='-left-0.5'
			/>
			<MapBox
				xPos='md:right-[15%]'
				yPos='md:top-[70%]'
				xPosMobile='right-[5%]'
				yPosMobile='top-[75%]'
				title1='MIPADVENTOUR!'
				subtitle='9 November 2024'
				num='5'
				numPos='md:-right-1'
				numPosMobile='-right-0.5'
				customRule='!w-44'
			/>
			<MapBox
				xPos='md:left-[42%]'
				yPos='md:top-[90%]'
				xPosMobile='left-[14%]'
				yPosMobile='top-[93%]'
				title1='INTO THE LAB!'
				subtitle='9 November 2024'
				num='6'
				numPos='md:-left-1'
				numPosMobile='-left-0.5'
			/>
		</div>
	);
};

export default TimelineSection;
