import { motion } from 'framer-motion';

const MapBox = ({ yPos, xPos, yPosMobile, xPosMobile, title1, title2, subtitle, num, numPos, numPosMobile, customRule }) => {
	return (
		<motion.div
			className={`absolute z-30 md:h-36 md:!w-80 h-16 w-40 md:border-4 border-2 border-[#6f2920] bg-[#FFE37F] bg-opacity-50 ${xPos} ${yPos} ${xPosMobile} ${yPosMobile} ${customRule}  flex flex-col items-center justify-center text-center`}
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
			whileHover={{ scale: 1.15 }}
			viewport={{ margin: '-30px', once: false }}
		>
			<p
				className='font-sunborn md:text-3xl text-md font-black md:leading-7 leading-4 tracking-tighter md:tracking-normal text-[#f7f3e4]'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: '0.5px',
				}}
			>
				{title1}
				<br />
				{title2}
			</p>
			<p className='md:text-lg text-[0.8rem] font-semibold italic text-[#440A00]'>
				{subtitle}
			</p>
			<div
				className={`absolute md:-top-1 -top-0.5 ${numPosMobile} ${numPos} flex md:h-10 md:w-10 h-[20px] w-[20px] items-center justify-center md:border-4 border-2 border-[#6f2920]`}
			>
				<p
					className='font-sunborn md:text-2xl text-xs font-black text-[#f7f3e4]'
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
