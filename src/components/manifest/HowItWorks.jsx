import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const HowItWorks = () => {
	const sectionRef = useRef(null)
	const triggerRef = useRef(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			const steps = gsap.utils.toArray('.timeline-step')

			// Just simple reveal for now, pinning can be complex to get right blindly without seeing it.
			// Let's do a reliable scroll-revealing timeline first.

			steps.forEach((step, i) => {
				gsap.from(step, {
					x: i % 2 === 0 ? -50 : 50,
					opacity: 0,
					duration: 1,
					scrollTrigger: {
						trigger: step,
						start: 'top 80%',
						toggleActions: 'play none none reverse',
					},
				})
			})
		}, sectionRef)
		return () => ctx.revert()
	}, [])

	const steps = [
		{
			num: '01',
			title: 'Kuzatish',
			desc: "Kunlik diqqat xaritasi tuziladi: vaqt, vazifa va raqamli sarf xaritasi. O'zingizni xolis kuzatishdan boshlang.",
			color: 'text-neon-blue',
			borderColor: 'border-neon-blue',
		},
		{
			num: '02',
			title: 'Qayta sozlash',
			desc: "Keraksiz odatlar o'rniga 3 ta asosiy rejim: fokus, dam, aloqa. Raqamli shovqinni filtrlang.",
			color: 'text-neon-red',
			borderColor: 'border-neon-red',
		},
		{
			num: '03',
			title: 'Mustahkamlash',
			desc: "Haftalik refleksiya, jamoaviy nazorat va o'zgarishlarni o'lchash. Natijalarni mustahkamlab boring.",
			color: 'text-purple-500',
			borderColor: 'border-purple-500',
		},
	]

	return (
		<section
			id='qanday-ishlaydi'
			ref={sectionRef}
			className='py-24 bg-black relative overflow-hidden'
		>
			{/* Background Line */}
			<div className='absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block transform -translate-x-1/2'></div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center mb-20'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Qanday ishlaydi?
					</h2>
					<p className='text-xl text-gray-400'>
						3 bosqich: kuzatish, qayta sozlash, mustahkamlash.
					</p>
				</div>

				<div className='space-y-12 md:space-y-24'>
					{steps.map((step, index) => (
						<div
							key={index}
							className={`timeline-step flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
						>
							<div className='flex-1 text-center md:text-right'>
								{/* Content for left side (or right if reversed) */}
								<div
									className={`p-8 rounded-2xl bg-surface border border-white/5 border-l-4 ${step.borderColor} ${index % 2 !== 0 ? 'md:text-left md:border-l-0 md:border-r-4' : ''}`}
								>
									<h3 className={`text-2xl font-bold mb-4 ${step.color}`}>
										{step.title}
									</h3>
									<p className='text-gray-300 leading-relaxed'>{step.desc}</p>
								</div>
							</div>

							<div className='relative flex items-center justify-center w-16 h-16 shrink-0'>
								<div
									className={`w-12 h-12 rounded-full bg-black border-2 ${step.borderColor.replace('border-', 'border-')} flex items-center justify-center z-10 font-bold text-white`}
								>
									{step.num}
								</div>
							</div>

							<div className='flex-1 hidden md:block'></div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
