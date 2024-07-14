import { motion } from 'framer-motion';

const MapBox = ({ yPos, xPos, title1, title2, subtitle, num, numPos }) => {
	return (
		<motion.div
			className={`absolute z-30 h-36 w-80 border-4 border-[#6f2920] bg-[#FFE37F] bg-opacity-50 ${xPos} ${yPos} flex flex-col items-center justify-center text-center`}
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
			whileHover={{ scale: 1.15 }}
			viewport={{ margin: '-150px', once: false }}
		>
			<p
				className='font-sunborn text-3xl font-black leading-7 text-[#f7f3e4]'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: '0.3px',
				}}
			>
				{title1}
				<br />
				{title2}
			</p>
			<p className='text-lg font-semibold italic text-[#440A00]'>
				{subtitle}
			</p>
			<div
				className={`absolute -top-1 ${numPos} flex h-10 w-10 items-center justify-center border-4 border-[#6f2920]`}
			>
				<p
					className='font-sunborn text-2xl font-black text-[#f7f3e4]'
					style={{
						WebkitTextStrokeColor: '#440A00',
						WebkitTextStrokeWidth: '0.3px',
					}}
				>
					{num}
				</p>
			</div>
		</motion.div>
	);
};

export default MapBox;
