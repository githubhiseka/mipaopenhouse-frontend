import longRope from '../../assets/long-rope.svg';
import rope from '../../assets/rope.svg';
import math from '../../assets/departments/matematika.svg';

const TopDesc = () => {
	return (
		<div
			className='bg-container relative flex w-full flex-col items-center justify-center gap-6 bg-[#b86a5d] bg-auto bg-center pt-20 pb-10' // bg-container is defined in styles.css
		>
			<img
				className='z-10 w-[30%] md:w-1/6 lg:w-[12.5%]'
				src={math}
			/>
			<p className='z-10 font-sunborn text-4xl font-bold tracking-widest text-[#6a2017] sm:text-5xl -mb-4'>
				MATEMATIKA
			</p>
			<p className='w-4/5 text-center font-lato text-xs tracking-wider text-[#f6f3e4] sm:text-base'>
				Departemen yang mempelajari tentang angka, kombinasi antara
				matematika murni dan terapan, mengajarkan pemahaman yang
				mendalam tentang teori dan aplikasi matematika, serta
				mengembangkan keterampilan analitis dan pemecahan masalah.
			</p>
			<img
				className='absolute -bottom-1 w-full'
				src={longRope}
			/>
		</div>
	);
};

export default TopDesc;
