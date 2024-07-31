const ProspekKerja = ({ bgColor, strokeColor, leaves }) => {
	return (
		<div className='relative flex w-full flex-col items-center justify-center gap-6 bg-[#f6f3e4] py-8 pb-32'>
			<p
				className='font-sunborn text-3xl text-transparent'
				style={{
					WebkitTextStrokeColor: strokeColor,
					WebkitTextStrokeWidth: '1.5px',
				}}
			>
				PROSPEK KERJA
			</p>
			<div
				className='relative z-10 flex h-24 w-2/3 items-center justify-center border-2 border-solid font-lato tracking-wider sm:w-1/2 lg:w-1/3'
				style={{ borderColor: strokeColor, backgroundColor: bgColor }}
			>
				<div
					className='absolute -left-0.5 -top-0.5 h-fit border-2 border-solid bg-transparent px-2 font-sunborn'
					style={{ borderColor: strokeColor, color: strokeColor }}
				>
					1
				</div>
				<p
					className='text-sm font-bold'
					style={{ color: strokeColor }}
				>
					Software Engineer
				</p>
			</div>
			<img
				className='absolute -bottom-8 -left-24 z-0 w-1/2 sm:w-2/5 md:w-1/3 lg:-bottom-12 lg:w-[28%] xl:w-1/4'
				src={leaves}
			/>
		</div>
	);
};
export default ProspekKerja;
