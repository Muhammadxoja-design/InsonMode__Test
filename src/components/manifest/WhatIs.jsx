import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const WhatIs = () => {
	const sectionRef = useRef(null)
	const quoteRef = useRef(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.whatis-text', {
				y: 30,
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 70%',
				},
			})

			gsap.from(quoteRef.current, {
				scale: 0.9,
				opacity: 0,
				duration: 1,
				ease: 'back.out(1.7)',
				scrollTrigger: {
					trigger: quoteRef.current,
					start: 'top 80%',
				},
			})
		}, sectionRef)
		return () => ctx.revert()
	}, [])

	return (
		<section id='nima-bu' ref={sectionRef} className='py-24 bg-black relative'>
			<div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
				<div className='whatis-text'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
						Nima bu?
					</h2>
					<p className='text-gray-300 text-lg mb-6 leading-relaxed'>
						Inson Mode bu yangi hayot rejimi, shaxsiy va jamoaviy tizim. Biz
						insonni markazga qo'yamiz: uning diqqatini, tanasini,
						munosabatlarini va maqsadini birlashtiramiz. Bu rejim sizga ortiqcha
						shovqinlarni cheklash, mazmunli ishlarga joy ochish va hayotni
						soddalashtirishga yordam beradi.
					</p>
					<p className='text-gray-300 text-lg leading-relaxed'>
						Inson Mode o'zini boshqarishning tiliga aylanadi: "qayerga
						qarayapman?", "nima uchun qilayapman?", "hozir men kim bo'lyapman?"
						degan savollarni kun tartibiga qaytaradi. Har bir blok amaliy:
						ko'nikma, jarayon va o'lchov mavjud.
					</p>
				</div>

				<div ref={quoteRef} className='relative'>
					<div className='absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-red/20 blur-2xl rounded-3xl transform rotate-3'></div>
					<blockquote className='relative bg-surface p-10 rounded-3xl border border-white/10 shadow-2xl'>
						<div className='text-6xl text-neon-blue mb-4 font-serif'>"</div>
						<p className='text-xl md:text-2xl text-white font-medium italic mb-6'>
							Inson Mode - faqat g'oya emas. Bu intizom, hamjamiyat va kundalik
							mikro-qarorlar tizimi. Biz ularni birga sinovdan o'tkazamiz va
							soddalashtiramiz.
						</p>
						<footer className='text-gray-400 font-mono text-sm'>
							— Inson Mode Manifest
						</footer>
					</blockquote>
				</div>
			</div>
		</section>
	)
}

export default WhatIs
