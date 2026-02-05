import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const WhyNeeded = () => {
	const sectionRef = useRef(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.why-card', {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
				},
			})
		}, sectionRef)
		return () => ctx.revert()
	}, [])

	const cards = [
		{
			title: 'Tarqoqlikka qarshi qalqon',
			desc: 'Axborot oqimi cheksiz, diqqatimiz esa cheklangan. Inson Mode sizga keraksiz signallarni o‘chirishni o‘rgatadi.',
			icon: '🛡️',
		},
		{
			title: 'Munosabatlarni tiklash',
			desc: 'Chinakam munosabat faqat hozir bo‘lishni talab qiladi. Biz yaqinlarimizga eng qimmat narsamizni — vaqtimiz va diqqatimizni beramiz.',
			icon: '❤️',
		},
		{
			title: "Energiya va sog'liq",
			desc: 'Doimiy onlayn rejim miyani zo‘riqtiradi. Bizga tiklanish, uyqu va chuqur dam olish kerak.',
			icon: '⚡',
		},
	]

	return (
		<section
			id='nega-kerak'
			ref={sectionRef}
			className='py-24 bg-gradient-to-b from-black to-gray-900 relative'
		>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 max-w-2xl mx-auto'>
					<h2 className='text-4xl font-bold text-white mb-6'>Nega kerak?</h2>
					<p className='text-xl text-gray-300'>
						"Chuqur diqqat - yangi boylik. Biz uni himoya qilamiz."
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{cards.map((card, index) => (
						<div
							key={index}
							className='why-card p-8 rounded-2xl bg-black border border-white/10 hover:border-neon-red/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,60,0.1)]'
						>
							<div className='text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left'>
								{card.icon}
							</div>
							<h3 className='text-xl font-bold text-white mb-4 group-hover:text-neon-red transition-colors'>
								{card.title}
							</h3>
							<p className='text-gray-400 leading-relaxed'>{card.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhyNeeded
