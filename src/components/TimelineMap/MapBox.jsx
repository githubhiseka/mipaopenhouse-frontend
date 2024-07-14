const MapBox = ({ yPos, xPos, title1, title2, subtitle, num, numPos }) => {
	return (
		<div
			className={`absolute z-30 h-[6%] w-[23%] border-4 border-[#6f2920] bg-[#FFE37F] bg-opacity-50 ${xPos} ${yPos} flex flex-col items-center justify-center text-center hover:scale-125 transition ease-in-out`}
		>
			<p
				className='font-sunborn text-2xl font-black leading-6 text-[#f7f3e4]'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: '0.3px',
				}}
			>
				{title1}
				<br />
				{title2}
			</p>
			<p className='font-semibold italic text-[#440A00]'>{subtitle}</p>
			<div
				className={`absolute -top-1 ${numPos} flex h-12 w-12 items-center justify-center border-4 border-[#6f2920]`}
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
		</div>
	);
};

export default MapBox;
