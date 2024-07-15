import { motion } from 'framer-motion';

import owl from '../assets/owl.svg';

const AboutUsSection = () => {
	return (
		<div className='flex w-full flex-col-reverse justify-center bg-[#FFE37F] md:flex-row md:pt-[27vh] xl:pt-[38vh]'>
			<motion.img
				className='mt-10 h-96 md:mt-0'
				src={owl}
				alt='Owl'
				initial={{ opacity: 0, x: '-100px' }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ margin: '-220px', once: false }}
			/>
			<motion.div
				className='w-100 md:ml-32 md:w-96'
				initial={{ opacity: 0, x: '100px' }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ margin: '-220px', once: false }}
			>
				<p className='font-regular pt-12 text-center font-sunborn text-7xl text-[#283C26] md:text-left'>
					ABOUT US
				</p>
				<p className='px-8 pt-6 text-justify text-xl font-normal text-[#283C26] md:px-0'>
					“MIPA Open House” adalah program BEM FMIPA UI yang
					memperkenalkan kampus dan kehidupan mahasiswa kepada siswa
					SMA. Acara ini mencakup tur kampus, seminar, workshop, dan
					Intip Departemen.
				</p>
			</motion.div>
		</div>
	);
};

export default AboutUsSection;
