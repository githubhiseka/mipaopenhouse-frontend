import forestImage from '../assets/forest.png';
import leaves from '../assets/leaves.png';

const TitleSection = () => {
	return (
		<div
			className='relative flex h-[80vh] w-full items-center justify-center bg-[#283C26] bg-cover bg-center pt-20'
			style={{ backgroundImage: `url(${forestImage})` }}
		>
			<p className='text-center font-sunborn text-8xl font-bold text-[#faf0c1] drop-shadow-title'>
				MIPA OPEN
				<br />
				HOUSE
			</p>
		</div>
	);
};

export default TitleSection;
