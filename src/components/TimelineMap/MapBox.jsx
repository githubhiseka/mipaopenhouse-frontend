import { motion } from 'framer-motion';

const MapBox = ({
	yPos,
	xPos,
	yPosMobile,
	xPosMobile,
	title1,
	title2,
	subtitle,
	num,
	numPos,
	numPosMobile,
	customRule,
}) => {
	return (
		<motion.div
			className={`absolute z-30 h-16 w-40 border-2 border-[#6f2920] bg-[#FFE37F] bg-opacity-50 md:h-36 md:!w-80 md:border-4 ${xPos} ${yPos} ${xPosMobile} ${yPosMobile} ${customRule} flex flex-col items-center justify-center text-center`}
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
			whileHover={{ scale: 1.15 }}
			viewport={{ margin: '-30px', once: false }}
		>
			<p
				className='text-md font-sunborn font-black leading-4 tracking-tighter text-[#f7f3e4] md:text-3xl md:leading-7 md:tracking-normal'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: '0.5px',
				}}
			>
				{title1}
				<br />
				{title2}
			</p>
			<p className='text-[0.7rem] font-semibold italic text-[#440A00] md:text-lg'>
				{subtitle}
			</p>
			<div
				className={`absolute -top-0.5 md:-top-1 ${numPosMobile} ${numPos} flex h-[20px] w-[20px] items-center justify-center border-2 border-[#6f2920] md:h-10 md:w-10 md:border-4`}
			>
				<p
					className='font-sunborn text-xs font-black text-[#f7f3e4] md:text-2xl'
					style={{
						WebkitTextStrokeColor: '#440A00',
						WebkitTextStrokeWidth: '0.5px',
					}}
				>
					{num}
				</p>
			</div>
		</motion.div>
	);
};

export default MapBox;
