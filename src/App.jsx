import NavBar from './components/NavBar';
import TitleSection from './components/TitleSection';
import AboutUsSection from './components/AboutUsSection';
import TimelineSection from './components/TimelineMap/TimelineSection';
import DeptSlider from './components/DeptSlider/DeptSlider';
import ContactSection from './components/ContactSection';

const App = () => {
	return (
		<div className='font-lato'>
			<NavBar />
			<TitleSection />
			<AboutUsSection />
			<TimelineSection />
			<DeptSlider />
			<ContactSection />
		</div>
	);
};

export default App;
