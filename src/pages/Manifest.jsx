import Contact from '../components/manifest/Contact'
import CoreHabits from '../components/manifest/CoreHabits'
import Directions from '../components/manifest/Directions'
import FAQ from '../components/manifest/FAQ'
import Hero from '../components/manifest/Hero'
import HowItWorks from '../components/manifest/HowItWorks'
import Principles from '../components/manifest/Principles'
import ThreeLayers from '../components/manifest/ThreeLayers'
import WhatIs from '../components/manifest/WhatIs'
import WhyNeeded from '../components/manifest/WhyNeeded'

const Manifest = () => {
	return (
		<>
			<Hero />
			<CoreHabits />
			<ThreeLayers />
			<WhatIs />
			<WhyNeeded />
			<HowItWorks />
			<Directions />
			<Principles />
			<FAQ />
			<Contact />
		</>
	)
}

export default Manifest
