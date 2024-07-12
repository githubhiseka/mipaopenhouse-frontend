import forestImage from '../assets/forest.png';

const TitleSection = () => {
	return (
		<div
			className='flex justify-center items-center w-full h-[80vh] bg-cover bg-center'
			style={{ backgroundImage: `url(${forestImage})` }}
		>
			<p className='font-extrabold text-8xl text-center text-[#faf0c1] drop-shadow-title'>
				MIPA OPEN
				<br />
				HOUSE
			</p>
		</div>
	);
};

export default TitleSection;
