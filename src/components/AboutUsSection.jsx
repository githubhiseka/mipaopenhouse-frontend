import Owl from '../assets/owl.svg';

const AboutUsSection = () => {
	return (
		<div className='flex flex-row bg-[#FFE37F] w-full pt-32 justify-center'>
			<img
				className='h-96'
				src={Owl}
				alt='Owl'
			/>
			<div className='ml-32 w-96'>
				<p className='font-extrabold text-6xl pt-12 text-left text-[#283C26]'>
					ABOUT US
				</p>
				<p className='text-justify text-xl pt-6 text-[#283C26] font-normal'>
					“MIPA Open House” adalah program BEM FMIPA UI yang
					memperkenalkan kampus dan kehidupan mahasiswa kepada siswa
					SMA. Acara ini mencakup tur kampus, seminar, workshop, dan
					Intip Departemen.
				</p>
			</div>
		</div>
	);
};

export default AboutUsSection;
