import map from '../assets/map.png';
import MapBox from './MapBox';

const TimelineSection = () => {
	return (
		<div className='relative z-10 flex h-auto w-full bg-[#f7f3e4]'>
			<img
				className='z-12 -mb-[12vh] -mt-[7vh] w-full'
				src={map}
				alt='Map Timeline'
			/>
			<p
				className='absolute left-[10%] top-[4%] font-sunborn text-7xl font-black text-[#FFE37F]'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: '0.3px',
				}}
			>
				OUR TIMELINE
			</p>
			<MapBox
				xPos='right-[10%]'
				yPos='top-[10%]'
				title1='MIPA OPEN'
				title2='HOUSE'
				subtitle='September - Oktober 2024'
				num='1'
				numPos='-right-1'
			/>
			<MapBox
				xPos='left-[14%]'
				yPos='top-[24%]'
				title1='MIPA ON THE'
				title2='WAY'
				subtitle='29 Juli - 23 Agustus 2024'
				num='2'
				numPos='-left-1'
			/>
			<MapBox
				xPos='right-[10%]'
				yPos='top-[43%]'
				title1='BEYOND THE'
				title2='BOOKS'
				subtitle='9 November 2024'
				num='3'
				numPos='-right-1'
			/>
			<MapBox
				xPos='left-[10%]'
				yPos='top-[50%]'
				title1='MAPPING YOUR'
				title2='WAY'
				subtitle='9 November 2024'
				num='4'
				numPos='-left-1'
			/>
			<MapBox
				xPos='right-[15%]'
				yPos='top-[70%]'
				title1='MIPADVENTOUR!'
				subtitle='9 November 2024'
				num='5'
				numPos='-right-1'
			/>
			<MapBox
				xPos='left-[42%]'
				yPos='top-[90%]'
				title1='INTO THE LAB!'
				subtitle='9 November 2024'
				num='6'
				numPos='-left-1'
			/>
		</div>
	);
};

export default TimelineSection;
