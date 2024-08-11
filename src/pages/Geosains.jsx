import NavBar from '../components/NavBar';
import TopDesc from '../components/ReadMoreDept/TopDesc';
import Peminatan from '../components/ReadMoreDept/Peminatan';
import Prodi from '../components/ReadMoreDept/Prodi';
import ProspekKerja from '../components/ReadMoreDept/ProspekKerja';
import Contact from '../components/ContactSection';

import geosains from '../assets/departments/geosains.svg';
import geosainsLeaves from '../assets/deptLeaves/geosains-leaves.png';

const Geosains = () => {
	const thickColor = '#717132';
	return (
		<div>
			<NavBar
				bgColor='rgba(252, 251, 160, 0.6)'
				textColor='#717132'
			/>
			<TopDesc
				bgColor='#fbfaa0'
				leavesOpacity='0.12'
				leavesBrightness='0.12'
				deptLogo={geosains}
				deptTitle='GEOSAINS'
				titleColor={thickColor}
				desc='Departemen dengan jurusan yang mempelajari ilmu tentang bumi, aspek-aspek fisik dan dinamik bumi dengan berbagai aspeknya, termasuk di dalamnya adalah batuan, bentuk atau struktur dan hubungan antar batuan serta proses kejadiannya.'
				descColor={thickColor}
			/>
			<Peminatan
				bgColor='#f9f7b8'
				strokeColor={thickColor}
				borderColor='#c0be9c'
				peminatanList={[
					{
						title: 'Geologi',
						items: [
							'Pemodelan Minyak & Gas',
							'Geologi Teknik Batuan & Tanah',
							'Subsurface Mapping',
						],
					},
					{
						title: 'Geofisika',
						items: ['Seismik', 'Gravitasi', 'Geolistrik'],
					},
				]}
			/>
			<Prodi
				strokeColor={thickColor}
				prodiList={['Geologi', 'Geofisika']}
			/>
			<ProspekKerja
				bgColor='#f9f7b8'
				strokeColor={thickColor}
				prospekList={[
					'Teknisi Tambang, Minyak, dan Material',
					'Kontraktor',
					'Research and Development',
					'Teknisi Konservasi Lingkungan',
					'System Analyst',
				]}
				leaves={geosainsLeaves}
			/>
			<Contact />
		</div>
	);
};

export default Geosains;
