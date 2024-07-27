const Prodi = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center gap-6 bg-[#f6f3e4] py-8'>
			<p
				className='font-sunborn text-3xl text-transparent'
				style={{
					WebkitTextStrokeColor: '#6a2017',
					WebkitTextStrokeWidth: '1.5px',
				}}
			>
				PROGRAM STUDI
			</p>
			<div className='flex w-2/5 justify-center gap-4'>
				<div className='flex-1 rounded-2xl border-2 border-solid border-[#6a2017] px-8 py-3 text-center font-lato font-bold tracking-wider text-[#6a2017]'>
					Matematika
				</div>
				<div className='flex-1 rounded-2xl border-2 border-solid border-[#6a2017] px-8 py-3 text-center font-lato font-bold tracking-wider text-[#6a2017]'>
					Statistika
				</div>
				<div className='flex-1 rounded-2xl border-2 border-solid border-[#6a2017] px-8 py-3 text-center font-lato font-bold tracking-wider text-[#6a2017]'>
					Ilmu aktuaria
				</div>
			</div>
		</div>
	);
};
export default Prodi;
