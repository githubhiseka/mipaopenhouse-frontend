import NavBar from '../components/NavBar';
import TitleSection from '../components/TitleSection';
import LeavesSection from '../components/LeavesSection';
import AboutUsSection from '../components/AboutUsSection';
import TimelineSection from '../components/TimelineMap/TimelineSection';
import DeptSlider from '../components/DeptSlider/DeptSlider';
import ContactSection from '../components/ContactSection';

const Homepage = () => {
	return (
		<div className='font-lato'>
			{/* lil touch */}
			<NavBar
				bgColor='rgba(40, 60, 38, 0.6)'
				textColor='#FFE37F'
			/>
			<TitleSection />
			<LeavesSection />
			<AboutUsSection />
			<TimelineSection />
			<DeptSlider />
			<ContactSection />
		</div>
	);
};

export default Homepage;
