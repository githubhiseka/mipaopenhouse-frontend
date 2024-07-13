import map from '../assets/map.png';
import timelineTitle from '../assets/timelineTitle.svg';
import MapBox from './MapBox';

const TimelineSection = () => {
	return (
		<div className='flex w-full h-auto z-10 relative bg-[#f7f3e4]'>
			<img
				className='w-full -mt-[7vh] -mb-[12vh] z-12'
				src={map}
				alt='Map Timeline'
			/>
			<p
				className='absolute top-[4%] left-[10%] text-[#FFE37F] font-black text-7xl font-sunborn'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: '0.3px',
				}}
			>
				OUR TIMELINE
			</p>
			<MapBox
				top='10%'
				right='10%'
				title1='MIPA OPEN'
				title2='HOUSE'
				subtitle='September - Oktober 2024'
				num='1'
				numpos='-right-1'
			/>
			<MapBox
				top='24%'
				left='14%'
				title1='MIPA ON THE'
				title2='WAY'
				subtitle='29 Juli - 23 Agustus 2024'
				num='2'
				numpos='-left-1'
			/>
			<MapBox
				top='43%'
				right='10%'
				title1='BEYOND THE'
				title2='BOOKS'
				subtitle='9 November 2024'
				num='3'
				numpos='-right-1'
			/>
			<MapBox
				top='50%'
				left='10%'
				title1='MAPPING YOUR'
				title2='WAY'
				subtitle='9 November 2024'
				num='4'
				numpos='-left-1'
			/>
			<MapBox
				top='70%'
				right='15%'
				title1='MIPADVENTOUR!'
				subtitle='9 November 2024'
				num='5'
				numpos='-right-1'
			/>
			<MapBox
				top='90%'
				left='42%'
				title1='INTO THE LAB!'
				subtitle='9 November 2024'
				num='6'
				numpos='-left-1'
			/>
		</div>
	);
};

export default TimelineSection;
