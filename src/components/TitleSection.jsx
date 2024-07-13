import forestImage from '../assets/forest.png';
import leaves from '../assets/leaves.png';

const TitleSection = () => {
	return (
		<div
			className='flex justify-center items-center w-full h-[80vh] bg-cover bg-center bg-[#283C26] relative'
			style={{ backgroundImage: `url(${forestImage})` }}
		>
			<p className='font-bold text-8xl text-center text-[#faf0c1] drop-shadow-title font-sunborn'>
				MIPA OPEN
				<br />
				HOUSE
			</p>
			{/* <img
				className='absolute top-0 w-full'
				src={leaves}
			/> */}
		</div>
	);
};

export default TitleSection;
