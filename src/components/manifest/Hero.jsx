import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const Hero = () => {
	const containerRef = useRef(null)
	const textRef = useRef(null)
	const bgRef = useRef(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Parallax background
			gsap.to(bgRef.current, {
				yPercent: 30,
				ease: 'none',
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
			})

			// Text Reveal
			const tl = gsap.timeline()
			tl.from('.hero-badge', {
				y: 20,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out',
			})
				.from(
					'.hero-title',
					{ y: 50, opacity: 0, duration: 1, ease: 'power3.out' },
					'-=0.6',
				)
				.from(
					'.hero-sub',
					{ y: 30, opacity: 0, duration: 1, ease: 'power3.out' },
					'-=0.8',
				)
				.from(
					'.hero-desc',
					{ y: 20, opacity: 0, duration: 1, ease: 'power3.out' },
					'-=0.8',
				)
				.from(
					'.hero-cta',
					{
						y: 20,
						opacity: 0,
						duration: 0.8,
						stagger: 0.2,
						ease: 'power3.out',
					},
					'-=0.6',
				)
		}, containerRef)
		return () => ctx.revert()
	}, [])

	return (
		<div
			ref={containerRef}
			className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'
		>
			{/* Background Elements */}
			<div ref={bgRef} className='absolute inset-0 z-0'>
				<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-slow'></div>
				<div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-red/10 rounded-full blur-[100px] animate-pulse-slow delay-1000'></div>
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
				{/* Grid */}
				<div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
			</div>

			<div className='container relative z-10 text-center px-4 max-w-4xl'>
				<div className='hero-badge inline-block px-4 py-1 mb-6 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm uppercase tracking-widest backdrop-blur-sm'>
					Insoniy diqqat rejimi
				</div>

				<h1 className='hero-title text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white'>
					Inson{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple'>
						Mode
					</span>
				</h1>

				<p className='hero-sub text-xl md:text-2xl text-gray-300 mb-8 font-light italic'>
					“Inson Mode - shovqindan chiqib, ma'no bilan yashash usuli.”
				</p>

				<p className='hero-desc text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed'>
					Inson Mode biz birga qurayotgan harakat: insoniy odatlar, diqqatni
					boshqarish, sog'lom munosabatlar va raqamli intizomni qayta tiklaydi.
					Bu loyiha texnologiyani to'xtatmaydi, uni maqsadga xizmat qildiradi.
				</p>

				<div className='flex flex-col sm:flex-row justify-center gap-4'>
					<a
						href='#aloqa'
						className='hero-cta px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neon-blue hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]'
					>
						Hamkorlikni boshlash
					</a>
					<a
						href='#qanday-ishlaydi'
						className='hero-cta px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm'
					>
						Qanday ishlaydi?
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
