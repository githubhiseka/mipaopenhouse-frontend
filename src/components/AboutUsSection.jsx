import Owl from '../assets/owl.svg';

const AboutUsSection = () => {
	return (
		<div className='flex w-full flex-col-reverse justify-center bg-[#FFE37F] pt-20 md:flex-row md:pt-32'>
			<img
				className='mt-10 h-96 md:mt-0'
				src={Owl}
				alt='Owl'
			/>
			<div className='w-100 md:ml-32 md:w-96'>
				<p className='font-regular pt-12 text-center font-sunborn text-7xl text-[#283C26] md:text-left'>
					ABOUT US
				</p>
				<p className='px-8 pt-6 text-justify text-xl font-normal text-[#283C26] md:px-0'>
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
