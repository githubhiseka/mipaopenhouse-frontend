import { useState } from 'react';

// logo and components
import TitleSection from './components/TitleSection';
import AboutUsSection from './components/AboutUsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import DeptSlider from './components/DeptSlider/DeptSlider';

const App = () => {
	return (
		<div className='font-lato'>
			<TitleSection />
			<AboutUsSection />
			<TimelineSection />
			<DeptSlider />
			<ContactSection />
		</div>
	);
};

export default App;
