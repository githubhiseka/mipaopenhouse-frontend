import leaves from '../assets/leaves.png';

const LeavesSection = () => {
	return (
		<div className='relative flex h-1 w-full bg-[#FFE37F]'>
			<img
				className='absolute left-1/2 top-1/2 z-40 w-full -translate-x-1/2 -translate-y-1/2 transform'
				src={leaves}
				alt='Leaves'
			/>
		</div>
	);
};

export default LeavesSection;
