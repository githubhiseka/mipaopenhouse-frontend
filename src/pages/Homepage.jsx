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
			<NavBar />
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
