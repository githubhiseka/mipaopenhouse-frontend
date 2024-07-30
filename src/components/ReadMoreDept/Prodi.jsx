import { color } from 'framer-motion';

const Prodi = ({ strokeColor, prodiList }) => {
	return (
		<div className='flex w-full flex-col items-center justify-center gap-6 bg-[#f6f3e4] py-8'>
			<p
				className='font-sunborn text-3xl text-transparent'
				style={{
					WebkitTextStrokeColor: strokeColor,
					WebkitTextStrokeWidth: '1.5px',
				}}
			>
				PROGRAM STUDI
			</p>
			<div className='flex w-4/5 flex-wrap justify-center gap-2 lg:w-7/12 xl:w-1/2'>
				{prodiList.map((prodi, index) => (
					<div
						key={index}
						className='flex-1 rounded-2xl border-2 border-solid px-8 py-3 text-center font-lato text-sm font-bold tracking-wider'
						style={{ color: strokeColor, borderColor: strokeColor }}
					>
						{prodi}
					</div>
				))}
			</div>
		</div>
	);
};
export default Prodi;
