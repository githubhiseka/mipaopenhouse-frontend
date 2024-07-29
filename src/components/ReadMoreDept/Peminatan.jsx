const Peminatan = () => {
	return (
		<div className='z-0 flex w-full flex-col items-center justify-center gap-2 bg-[#f6f3e4] py-8'>
			<p
				className='font-sunborn text-3xl text-transparent mb-3'
				style={{
					WebkitTextStrokeColor: '#6a2017',
					WebkitTextStrokeWidth: '1.5px',
				}}
			>
				PEMINATAN
			</p>
			<p className='font-lato font-semibold tracking-wider text-[#6a2017]'>
				Matematika
			</p>
			<div className='relative flex w-3/5 sm:w-1/2 lg:w-1/3 xl:w-[28%] rounded-full border-2 border-solid border-[#be9f92] bg-[#d3a597] font-lato font-semibold tracking-wider text-[#6a2017]'>
				<div className='absolute -left-0.5 -top-0.5 rounded-full border-2 border-solid border-[#6a2017] bg-[#f6f3e4] px-2'>
					1
				</div>
				<p className='mx-auto'>Komputasi</p>
			</div>
			<div className='relative flex w-3/5 sm:w-1/2 lg:w-1/3 xl:w-[28%] rounded-full border-2 border-solid border-[#be9f92] bg-[#d3a597] font-lato font-semibold tracking-wider text-[#6a2017]'>
				<div className='absolute -left-0.5 -top-0.5 rounded-full border-2 border-solid border-[#6a2017] bg-[#f6f3e4] px-2'>
					2
				</div>
				<p className='mx-auto'>Riset dan Operasi</p>
			</div>
			<div className='relative flex w-3/5 sm:w-1/2 lg:w-1/3 xl:w-[28%] rounded-full border-2 border-solid border-[#be9f92] bg-[#d3a597] font-lato font-semibold tracking-wider text-[#6a2017]'>
				<div className='absolute -left-0.5 -top-0.5 rounded-full border-2 border-solid border-[#6a2017] bg-[#f6f3e4] px-2'>
					3
				</div>
				<p className='mx-auto'>Matematika Murni</p>
			</div>
		</div>
	);
};
export default Peminatan;
