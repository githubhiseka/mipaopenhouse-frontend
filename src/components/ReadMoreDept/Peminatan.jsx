const Peminatan = ({ bgColor, strokeColor, borderColor, peminatanList }) => {
	return (
		<div className='z-0 flex w-full flex-col items-center justify-center gap-2 bg-[#f6f3e4] py-8'>
			<p
				className='mb-3 mt-6 font-sunborn text-3xl text-transparent'
				style={{
					WebkitTextStrokeColor: strokeColor,
					WebkitTextStrokeWidth: '1.5px',
				}}
			>
				PEMINATAN
			</p>
			<p
				className='font-lato font-semibold tracking-wider'
				style={{ color: strokeColor }}
			>
				Matematika
			</p>
			{peminatanList.map((peminatan, index) => (
				<div
					key={index}
					className='relative flex w-3/5 rounded-full border-2 border-solid font-lato font-semibold tracking-wider sm:w-1/2 lg:w-1/3 xl:w-[28%]'
					style={{
						backgroundColor: bgColor,
						borderColor: borderColor,
						color: strokeColor,
					}}
				>
					<div
						className='absolute -left-0.5 -top-0.5 rounded-full border-2 border-solid bg-[#f6f3e4] px-2'
						style={{ borderColor: strokeColor }}
					>
						{index + 1}
					</div>
					<p className='mx-auto'>{peminatan}</p>
				</div>
			))}
		</div>
	);
};
export default Peminatan;
