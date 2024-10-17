import NavBar from '../components/NavBar';
import TopDesc from '../components/ReadMoreDept/TopDesc';
import Peminatan from '../components/ReadMoreDept/Peminatan';
import Prodi from '../components/ReadMoreDept/Prodi';
import ProspekKerja from '../components/ReadMoreDept/ProspekKerja';
import Contact from '../components/ContactSection';

import physics from '../assets/departments/fisika.svg';
import physicsLeaves from '../assets/deptLeaves/physics-leaves.webp';

const Fisika = () => {
	const thickColor = '#1a3612';
	return (
		<div>
			<NavBar
				bgColor='rgba(104, 138, 87, 0.6)'
				textColor='#1a3612'
			/>
			<TopDesc
				bgColor='#678a56'
				leavesOpacity='0.12'
				leavesBrightness='1.0'
				deptLogo={physics}
				deptTitle='FISIKA'
				titleColor={thickColor}
				desc='Departemen yang memberikan pemahaman yang mendalam tentang prinsip-prinsip dasar fisika, metode-metode penelitian, dan aplikasi fisika dalam berbagai konteks, mulai dari skala partikel hingga skala kosmik'
				descColor='#f6f3e4'
			/>
			<Peminatan
				bgColor='#a4b793'
				strokeColor={thickColor}
				borderColor='#9da68f'
				peminatanList={[
					{
						title: '',
						items: [
							'Instrumentasi',
							'Fisika Medis & Biomedis',
							'Fisika Nuklir & Partikel',
						],
					},
				]}
			/>
			<Prodi
				strokeColor={thickColor}
				prodiList={['Fisika']}
			/>
			<ProspekKerja
				bgColor='#a4b793'
				strokeColor={thickColor}
				prospekList={[
					'Bidang Perminyakan dan Pertambangan',
					'Riset dan Pengembangan',
					'Industri Manufaktur',
					'Bagian Perencanaan Produk Otomotif',
				]}
				leaves={physicsLeaves}
			/>
			<Contact />
		</div>
	);
};

export default Fisika;
