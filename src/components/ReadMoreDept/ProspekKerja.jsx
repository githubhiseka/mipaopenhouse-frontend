import MatematikaLeaves from "../../assets/leaves-flowers.png"

const ProspekKerja = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center gap-6 bg-[#f6f3e4] py-8 pb-32 relative'>
			<p
				className='font-sunborn text-3xl text-transparent'
				style={{
					WebkitTextStrokeColor: '#6a2017',
					WebkitTextStrokeWidth: '1.5px',
				}}
			>
				PROSPEK KERJA
			</p>
			<div className='relative flex h-24 w-1/3 items-center justify-center border-2 border-solid border-[#6a2017] bg-[#d3a597] font-lato tracking-wider'>
				<div className='absolute -left-0.5 -top-0.5 h-fit border-2 border-solid border-[#6a2017] bg-transparent px-2 font-sunborn'>
					1
				</div>
				<p className=''>Kemampuan analisis</p>
			</div>
            <img 
                className="absolute w-1/6 -left-20 -bottom-8 z-0"
                src={MatematikaLeaves}
            />
		</div>
	);
};
export default ProspekKerja;
