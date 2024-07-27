import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NavBar from './components/NavBar';
// import TitleSection from './components/TitleSection';
// import LeavesSection from './components/LeavesSection';
// import AboutUsSection from './components/AboutUsSection';
// import TimelineSection from './components/TimelineMap/TimelineSection';
// import DeptSlider from './components/DeptSlider/DeptSlider';
// import ContactSection from './components/ContactSection';
import Homepage from './pages/Homepage';
import Matematika from './pages/Matematika'

const App = () => {
	return (
		// <div className='font-lato'>
		<Router>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path='/matematika' element={<Matematika />} />
				{/* <NavBar />
				<TitleSection />
				<LeavesSection />
				<AboutUsSection />
				<TimelineSection />
				<DeptSlider />
				<ContactSection /> */}
			</Routes>
		</Router>
		// </div>
	);
};

export default App;
