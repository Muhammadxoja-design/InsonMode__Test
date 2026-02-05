import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

gsap.registerPlugin(ScrollToPlugin)

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const location = useLocation()
	const headerRef = useRef(null)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 900 && menuOpen) {
				setMenuOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [menuOpen])

	const handleNavClick = (e, hash) => {
		e.preventDefault()
		setMenuOpen(false)

		if (location.pathname !== '/manifest') {
			// Handle navigation if not on manifest page (though we redirect for now)
			window.location.href = `/manifest${hash}`
			return
		}

		gsap.to(window, {
			duration: 1,
			scrollTo: { y: hash, offsetY: 80 },
			ease: 'power3.inOut',
		})
	}

	useEffect(() => {
		// Header reveal animation
		gsap.from(headerRef.current, {
			yPercent: -100,
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
			delay: 0.5,
		})
	}, [])

	return (
		<header
			ref={headerRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${menuOpen ? 'bg-black' : 'bg-black/80 backdrop-blur-md border-b border-white/10'}`}
		>
			<div className='container mx-auto px-4 h-20 flex items-center justify-between'>
				<Link to='/manifest' className='flex items-center gap-3 group'>
					<div className='w-10 h-10 flex items-center justify-center rounded-lg bg-neon-blue/10 border border-neon-blue/30 text-neon-blue font-bold text-lg group-hover:bg-neon-blue group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]'>
						IM
					</div>
					<div className='flex flex-col'>
						<span className='text-white font-bold text-lg leading-none group-hover:text-neon-blue transition-colors'>
							Inson Mode
						</span>
						<span className='text-gray-400 text-xs hidden sm:block'>
							insoniy odatlarni tiklash
						</span>
					</div>
				</Link>

				{/* Desktop Nav */}
				<nav className='hidden md:flex items-center gap-8'>
					{['nima-bu', 'nega-kerak', 'qanday-ishlaydi', 'aloqa'].map(item => (
						<a
							key={item}
							href={`#${item}`}
							onClick={e => handleNavClick(e, `#${item}`)}
							className="text-gray-300 hover:text-white text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-neon-blue after:transition-all hover:after:w-full"
						>
							{item.replace(/-/g, ' ')}
						</a>
					))}
				</nav>

				<div className='hidden md:flex items-center gap-4'>
					<a
						href='https://t.me/InsonMode'
						target='_blank'
						rel='noopener noreferrer'
						className='px-4 py-2 text-sm font-medium text-neon-blue border border-neon-blue/30 rounded-lg hover:bg-neon-blue hover:text-black transition-all shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]'
					>
						Telegram
					</a>
				</div>

				{/* Mobile Toggle */}
				<button
					className='md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none'
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span
						className={`block w-6 h-[2px] bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
					/>
					<span
						className={`block w-6 h-[2px] bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
					/>
					<span
						className={`block w-6 h-[2px] bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<nav className='flex flex-col p-6 gap-4'>
					{['nima-bu', 'nega-kerak', 'qanday-ishlaydi', 'aloqa'].map(item => (
						<a
							key={item}
							href={`#${item}`}
							onClick={e => handleNavClick(e, `#${item}`)}
							className='text-xl text-gray-300 hover:text-neon-blue'
						>
							{item.replace(/-/g, ' ')}
						</a>
					))}
					<a
						href='https://t.me/InsonMode'
						className='text-xl text-neon-blue mt-4'
					>
						Telegram
					</a>
				</nav>
			</div>
		</header>
	)
}
