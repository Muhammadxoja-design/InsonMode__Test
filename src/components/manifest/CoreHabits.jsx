import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const CoreHabits = () => {
	const sectionRef = useRef(null)
	const cardsRef = useRef([])

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(cardsRef.current, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 80%',
				},
			})
		}, sectionRef)
		return () => ctx.revert()
	}, [])

	const habits = [
		{
			title: 'Diqqatni himoya qilish',
			desc: 'Diqqatni himoya qiluvchi kundalik amaliyotlar.',
			icon: '🛡️',
		},
		{
			title: 'Raqamli qoidalar',
			desc: 'Oila, jamoa va ish uchun aniq raqamli qoidalar.',
			icon: '📵',
		},
		{
			title: 'Sokin ritm',
			desc: 'Qadriyatga tayangan, sokin va kuchli ritm.',
			icon: '🌊',
		},
	]

	return (
		<section ref={sectionRef} className='py-20 bg-black relative'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-3 gap-8'>
					{habits.map((habit, index) => (
						<div
							key={index}
							ref={el => (cardsRef.current[index] = el)}
							className='bg-surface p-8 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors group'
						>
							<div className='text-4xl mb-6 group-hover:scale-110 transition-transform duration-300'>
								{habit.icon}
							</div>
							<h3 className='text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors'>
								{habit.title}
							</h3>
							<p className='text-gray-400'>{habit.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CoreHabits
