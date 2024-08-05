import TopDesc from '../components/ReadMoreDept/TopDesc';
import Peminatan from '../components/ReadMoreDept/Peminatan';
import Prodi from '../components/ReadMoreDept/Prodi';
import ProspekKerja from '../components/ReadMoreDept/ProspekKerja';
import Contact from '../components/ContactSection';

import biologi from '../assets/departments/biologi.svg';
import bioLeaves from '../assets/deptLeaves/bio-leaves.png';

const Biologi = () => {
	const thickColor = '#934d1b';
	return (
		<div>
			<TopDesc
				bgColor='#fca25d'
				deptLogo={biologi}
				deptTitle='BIOLOGI'
				titleColor={thickColor}
				desc='Departemen yang mempelajari proses kehidupan makhluk hidup pada semua tingkatan molekuler, seluler, organisme dan ekologi pada hewan dan tumbuhan. serta perkembangan atau evolusi meliputi perilaku, fisiologi dan genetika'
				descColor='#6a2017'
			/>
			<Peminatan
				bgColor='#fac597'
				borderColor='#d3a597'
				strokeColor={thickColor}
				peminatanList={[
					'Community Ecology & Environmental Biologi',
					'Cellular and Molecular Mechanism in Biological System',
					'Microbial Systematics and Prospecting',
				]}
			/>
			<Prodi
				strokeColor={thickColor}
				prodiList={['Biologi']}
			/>
			<ProspekKerja
				bgColor='#fac597'
				strokeColor={thickColor}
				prospekList={[
					'Ahli Bioteknologi',
					'Ilmuwan Riset',
					'Ahli Biologi',
					'Ahli Ekologi',
					'Farmakologi',
				]}
				leaves={bioLeaves}
			/>
			<Contact />
		</div>
	);
};

export default Biologi;
