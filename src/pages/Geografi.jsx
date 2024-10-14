import NavBar from '../components/NavBar';
import TopDesc from '../components/ReadMoreDept/TopDesc';
import Peminatan from '../components/ReadMoreDept/Peminatan';
import Prodi from '../components/ReadMoreDept/Prodi';
import ProspekKerja from '../components/ReadMoreDept/ProspekKerja';
import Contact from '../components/ContactSection';

import geo from '../assets/departments/geografi.svg';
import geoLeaves from '../assets/deptLeaves/geo-leaves.webp';

const Geografi = () => {
	const thickColor = '#000000';
	return (
		<div>
			<NavBar
				bgColor='rgba(92, 91, 85, 0.6)'
				textColor='#000000'
			/>
			<TopDesc
				bgColor='#5b5a54'
				leavesOpacity='0.06'
				leavesBrightness='1.0'
				deptLogo={geo}
				deptTitle='GEOGRAFI'
				titleColor={thickColor}
				desc='Departemen yang mempelajari tentang bentang lahan dan hal-hal terkait fisik bumi, topografi, iklim, hingga geografi manusia. Departemen ini juga mempelajari perspektif regional dalam berbagai pengembangan wilayah termasuk penguasaan teknologi sistem informasi geografis'
				descColor='#f6f3e4'
			/>
			<Peminatan
				bgColor='#939188'
				strokeColor={thickColor}
				borderColor='#939188'
				peminatanList={[
					{
						title: '',
						items: [
							'Geografi Manusia',
							'Geografi Fisik',
							'Sistem Informasi Geografis',
						],
					},
				]}
			/>
			<Prodi
				strokeColor={thickColor}
				prodiList={['Geografi']}
			/>
			<ProspekKerja
				bgColor='#939188'
				strokeColor={thickColor}
				prospekList={[
					'Surveyor Tanah',
					'Ahli Pemetaan',
					'Perencana Wilayah dan Kota',
					'Tenaga Ahli Perkiraan Cuaca',
				]}
				leaves={geoLeaves}
			/>
			<Contact />
		</div>
	);
};

export default Geografi;
