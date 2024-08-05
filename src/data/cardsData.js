import matematika from '../assets/departments/matematika.svg';
import biologi from '../assets/departments/biologi.svg';
import kimia from '../assets/departments/kimia.svg';
import fisika from '../assets/departments/fisika.svg';
import geografi from '../assets/departments/geografi.svg';
import geosains from '../assets/departments/geosains.svg';

const cardsData = [
	{
		title: 'MATEMATIKA',
		bgColor: 'bg-[#9E3023]',
		imgSrc: matematika,
		desc: 'Fokus pada studi teori, metode, dan aplikasi matematika',
		btnHref: '/matematika',
		titleColor: 'text-[#6A2017]',
	},
	{
		title: 'BIOLOGI',
		bgColor: 'bg-[#FF7F23]',
		imgSrc: biologi,
		desc: 'Mempelajari kehidupan dan organisme, dari molekul hingga ekosistem',
		btnHref: '/biologi',
		titleColor: 'text-[#934D1B]',
	},
	{
		title: 'KIMIA',
		bgColor: 'bg-[#683486]',
		imgSrc: kimia,
		desc: 'Mempelajari komposisi, struktur, dan sifat materi serta reaksi kimia',
		btnHref: '/kimia',
		titleColor: 'text-[#301A3D]',
	},
	{
		title: 'FISIKA',
		bgColor: 'bg-[#2B5E1B]',
		imgSrc: fisika,
		desc: 'Mempelajari sifat dan fenomena alam melalui pendekatan fisika',
		btnHref: '/fisika',
		titleColor: 'text-[#1A3612]',
	},
	{
		title: 'GEOGRAFI',
		bgColor: 'bg-[#141414]',
		imgSrc: geografi,
		desc: 'Mempelajari hubungan manusia dan lingkungan, serta distribusi ruang di permukaan bumi',
		btnHref: '/geografi',
		titleColor: 'text-[#000000]',
	},
	{
		title: 'GEOSAINS',
		bgColor: 'bg-[#FFFF79]',
		imgSrc: geosains,
		desc: 'Mempelajari bumi, termasuk geologi, geofisika, dan ilmu kebumian lainnya',
		btnHref: '/geosains',
		titleColor: 'text-[#717132]',
	},
];

export default cardsData;
