const MapBox = ({ yPos, xPos, title1, title2, subtitle, num, numPos }) => {
	return (
		<div
			className={`absolute w-[23%] h-[6%] z-100 bg-[#FFE37F] bg-opacity-50 border-[#6f2920] border-4 ${xPos} ${yPos} flex flex-col items-center justify-center text-center`}
		>
			<p
				className='text-[#f7f3e4] font-black font-sunborn text-2xl leading-6'
				style={{
					WebkitTextStrokeColor: '#440A00',
					WebkitTextStrokeWidth: '0.3px',
				}}
			>
				{title1}
				<br />
				{title2}
			</p>
            <p className='text-[#440A00] italic font-semibold'>
				{subtitle}
			</p>
			<div className={`absolute -top-1 ${numPos} border-[#6f2920] border-4 w-12 h-12 flex items-center justify-center`}>
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
