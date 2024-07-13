import { useState } from 'react'

// logo and components
import TitleSection from './components/TitleSection'
import AboutUsSection from './components/AboutUsSection'
import TimelineSection from './components/TimelineSection'
import ContactSection from './components/ContactSection'

const App = () => {
	return (
		<div className='flex flex-col items-center m-0 w-full'>
			{/* TODO: Add navbar */}
			<TitleSection />
			<AboutUsSection />
			<TimelineSection />
			{/* TODO: Add departments horizontal framer, readjust bottom margin of TimelineSection */}
			<ContactSection />
		</div>
	)
}

export default App
