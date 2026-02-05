import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const ThreeLayers = () => {
	const sectionRef = useRef(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.layer-card', {
				x: -50,
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

	const layers = [
		{
			title: '3 qatlamli yondashuv',
			desc: 'Odat + Makon + Raqamli intizom',
			color: 'border-neon-blue',
		},
		{
			title: 'Muvozanat signalari',
			desc: 'Charchoq, ortiqcha kontent va tarqoqlikni erta aniqlash',
			color: 'border-neon-red',
		},
		{
			title: 'Kichik qadamlar',
			desc: 'Har kuni 20 daqiqa ongli rejimni mustahkamlash',
			color: 'border-purple-500',
		},
	]

	return (
		<section
			ref={sectionRef}
			className='py-24 bg-surface relative overflow-hidden'
		>
			<div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent pointer-events-none'></div>

			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto space-y-6'>
					{layers.map((layer, index) => (
						<div
							key={index}
							className={`layer-card p-8 rounded-2xl bg-black border-l-4 ${layer.color} shadow-lg relative overflow-hidden`}
						>
							<h3 className='text-2xl font-bold text-white mb-2'>
								{layer.title}
							</h3>
							<p className='text-gray-400 text-lg'>{layer.desc}</p>
							<div className='absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl'></div>
						</div>
					))}

					<div className='layer-card p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-white/10 mt-12 flex flex-col md:flex-row items-center justify-between gap-6'>
						<div>
							<h3 className='text-xl font-bold text-white mb-2'>Tez aloqa</h3>
							<p className='text-gray-400'>
								Savollaringiz bormi? Bizga yozing.
							</p>
						</div>
						<div className='flex gap-4'>
							<a
								href='https://t.me/InsonMode'
								className='text-neon-blue hover:text-white transition-colors'
							>
								@InsonMode
							</a>
							<a
								href='mailto:coderkimyonazarov@gmail.com'
								className='text-neon-red hover:text-white transition-colors'
							>
								Email Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ThreeLayers
