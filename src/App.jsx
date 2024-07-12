import { useState } from 'react'

// logo and components
import TitleSection from './components/TitleSection'
import AboutUsSection from './components/AboutUsSection'
import TimelineSection from './components/TimelineSection'

const App = () => {
	return (
		<div className='flex flex-col items-center m-0 w-full'>
			<TitleSection />
			<AboutUsSection />
		</div>
	)
}

export default App
