import {useState} from "react";

// logo and components
import TitleSection from "./components/TitleSection";
import AboutUsSection from "./components/AboutUsSection";
import TimelineSection from "./components/TimelineSection";
import ContactSection from "./components/ContactSection";
import DeptSlider from "./components/DeptSlider/DeptSlider";

const App = () => {
	return (
		<div className="font-lato">
			{/* TODO: Add navbar */}
			<TitleSection />
			<AboutUsSection />
			<TimelineSection />
			{/* TODO: Add departments horizontal framer, readjust bottom margin of TimelineSection */}
			<DeptSlider />
			<ContactSection />
		</div>
	);
};

export default App;
