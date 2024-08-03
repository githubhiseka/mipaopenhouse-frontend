import TopDesc from '../components/ReadMoreDept/TopDesc';
import Peminatan from '../components/ReadMoreDept/Peminatan';
import Prodi from '../components/ReadMoreDept/Prodi';
import ProspekKerja from '../components/ReadMoreDept/ProspekKerja';
import Contact from '../components/ContactSection';

import math from '../assets/departments/matematika.svg';
import mathLeaves from '../assets/deptLeaves/math-leaves.png';

const Matematika = () => {
	const thickColor = '#6a2017';
	return (
		<div className='font-lato'>
			<TopDesc
				bgColor='#b86a5d'
				deptLogo={math}
				deptTitle='MATEMATIKA'
				titleColor={thickColor}
				desc='Departemen yang mempelajari tentang angka, kombinasi antara matematika murni dan terapan, mengajarkan pemahaman yang mendalam tentang teori dan aplikasi matematika, serta mengembangkan keterampilan analitis dan pemecahan masalah.'
				descColor='#f6f3e4'
			/>
			<Peminatan
				bgColor='#d3a597'
				strokeColor={thickColor}
				borderColor='#be9f92'
				peminatanList={[
					{
						title: 'Matematika',
						items: [
							'Komputasi',
							'Riset dan Operasi',
							'Matematika Murni',
						],
					},
					{
						title: 'Statistika',
						items: ['Statistika Murni', 'Statistika Terapan'],
					},
				]}
			/>
			<Prodi
				strokeColor={thickColor}
				prodiList={['Matematika', 'Statistika', 'Ilmu Aktuaria']}
			/>
			<ProspekKerja
				bgColor='#d3a597'
				strokeColor={thickColor}
				prospekList={[
					'Software Engineer',
					'Data Analyst',
					'Data Scientist',
					'Aktuaris',
					'Dosen',
					'Konsultan',
				]}
				leaves={mathLeaves}
			/>
			<Contact />
		</div>
	);
};

export default Matematika;
