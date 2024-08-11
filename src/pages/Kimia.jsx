import NavBar from '../components/NavBar';
import TopDesc from '../components/ReadMoreDept/TopDesc';
import Peminatan from '../components/ReadMoreDept/Peminatan';
import Prodi from '../components/ReadMoreDept/Prodi';
import ProspekKerja from '../components/ReadMoreDept/ProspekKerja';
import Contact from '../components/ContactSection';

import chem from '../assets/departments/kimia.svg';
import chemLeaves from '../assets/deptLeaves/chem-leaves.png';

const Kimia = () => {
	const thickColor = '#301a3d';

	return (
		<div>
			<NavBar
				bgColor='rgba(146, 109, 162, 0.6)'
				textColor='#301a3d'
			/>
			<TopDesc
				bgColor='#926ca1'
				leavesOpacity='0.1'
				leavesBrightness='1.0'
				deptLogo={chem}
				deptTitle='KIMIA'
				titleColor={thickColor}
				desc='Departemen yang mempelajari struktur, sifat, dan reaktivitas suatu zat. Terdapat pula materi fisika kimia yang mempelajari sifat-sifat zat di lapangan untuk lebih memfokuskan diri pada senyawa organik, senyawa anorganik, protein, dan sebagainya.'
				descColor='#f6f3e4'
			/>
			<Peminatan
				bgColor='#bca6be'
				borderColor='#a69ba0'
				strokeColor={thickColor}
				peminatanList={[
					{
						title: '',
						items: ['Kimia Organik', 'Kimia Anorganik', 'Biokimia'],
					},
				]}
			/>
			<Prodi
				strokeColor={thickColor}
				prodiList={['Kimia']}
			/>
			<ProspekKerja
				bgColor='#bca6be'
				strokeColor={thickColor}
				prospekList={[
					'Bagian Pengendalian Mutu Produk dan Kesehatan',
					'Peneliti Kimiawan',
					'Teknisi Kimia',
					'Bagian Perencanaan, Pengembangan, dan Penelitian Produk Bioteknologi',
					'Teknisi Laboratorium Klinis',
				]}
				leaves={chemLeaves}
			/>
			<Contact />
		</div>
	);
};

export default Kimia;
