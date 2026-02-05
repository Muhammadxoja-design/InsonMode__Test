import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useEffect } from 'react'
import Header from './header'

gsap.registerPlugin(ScrollTrigger)

const Layout = ({ children }) => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
		})

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		// Integreate Lenis with GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add(time => {
			lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)

		return () => {
			lenis.destroy()
			gsap.ticker.remove(lenis.raf)
		}
	}, [])

	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>{children}</main>
			<footer className='py-8 text-center text-sm text-gray-500 bg-black border-t border-gray-900'>
				<div className='container'>
					<p>© {new Date().getFullYear()} Inson Mode. All rights reserved.</p>
					<div className='mt-2 flex justify-center gap-4'>
						<a
							href='https://t.me/InsonMode'
							className='hover:text-neon-blue transition-colors'
						>
							Telegram
						</a>
						<a
							href='mailto:coderkimyonazarov@gmail.com'
							className='hover:text-neon-blue transition-colors'
						>
							Email
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Layout
