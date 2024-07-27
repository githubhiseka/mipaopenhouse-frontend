import longRope from '../../assets/long-rope.svg';
import rope from '../../assets/rope.svg';
import math from '../../assets/departments/matematika.svg';

const TopDesc = () => {
	return (
		<div
			className='bg-container relative flex w-full flex-col items-center justify-center gap-6 bg-[#b86a5d] bg-auto bg-center py-20' // bg-container is defined in styles.css
		>
			<img
				className='z-10 w-[12.5%]'
				src={math}
			/>
			<p className='z-10 font-sunborn text-4xl font-bold tracking-widest text-[#6a2017]'>
				MATEMATIKA
			</p>
			<p className='w-1/3 sm:w-3/5 xl:w-1/3 text-center font-lato tracking-wider text-[#f6f3e4]'>
				Departemen yang mempelajari tentang angka, kombinasi antara
				matematika murni dan terapan, mengajarkan pemahaman yang
				mendalam tentang teori dan aplikasi matematika, serta
				mengembangkan keterampilan analitis dan pemecahan masalah.
			</p>
			<img
				className='absolute -bottom-8 w-full'
				src={rope}
			/>
		</div>
	);
};

export default TopDesc;
