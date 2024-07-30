import forestImage from '../assets/forest.png';

const TitleSection = () => {
	return (
		<div
			id='title-section'
			className='relative flex md:h-[70vh] h-[80vh] w-full items-center justify-center bg-[#283C26] bg-cover bg-center pt-20'
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
