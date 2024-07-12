import map from '../assets/map.png';

const TimelineSection = () => {
	return (
		<div className='flex w-full h-auto z-10 relative'>
            <img
                className='w-full mt-[-60px] mb-[40px] z-12' // Change mb to mb-[-80px] to adjust bottom margin
                src={map}
                alt='Map Timeline'
            />
            <p className='absolute top-20 left-16 text-[#FFE37F] font-extrabold text-6xl' style={{ WebkitTextStrokeColor: '#440A00', WebkitTextStrokeWidth: '2px' }}>
                OUR TIMELINE
            </p>
		</div>
	);
};

export default TimelineSection;
