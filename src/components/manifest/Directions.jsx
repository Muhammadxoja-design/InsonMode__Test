import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const Directions = () => {
	const sectionRef = useRef(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.dir-item', {
				scale: 0.9,
				opacity: 0,
				duration: 0.6,
				stagger: 0.1,
				ease: 'back.out(1.7)',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 80%',
				},
			})
		}, sectionRef)
		return () => ctx.revert()
	}, [])

	const items = [
		'Diqqat va fokus',
		'Oila va munosabatlar',
		"Sog'liq va uyqu",
		"O'qish va o'sish",
		'Ijod va ishlab chiqarish',
		'Raqamli gigiyena',
		'Jamoaviy ritm',
	]

	return (
		<section className='py-24 bg-surface relative'>
			<div ref={sectionRef} className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-white mb-12 text-center'>
					Yo'nalishlar
				</h2>

				<div className='flex flex-wrap justify-center gap-4'>
					{items.map((item, index) => (
						<div
							key={index}
							className='dir-item px-8 py-4 rounded-full border border-white/10 bg-black hover:bg-white/5 hover:border-neon-blue/50 transition-all cursor-default'
						>
							<span className='text-lg text-gray-300 hover:text-white transition-colors'>
								{item}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Directions
