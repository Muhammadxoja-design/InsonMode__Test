const Contact = () => {
	return (
		<section id='aloqa' className='py-24 bg-black relative overflow-hidden'>
			{/* Glow effects */}
			<div className='absolute top-1/2 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]'></div>
			<div className='absolute bottom-0 right-1/4 w-80 h-80 bg-neon-red/10 rounded-full blur-[120px]'></div>

			<div className='container mx-auto px-4 text-center relative z-10'>
				<h2 className='text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight'>
					Aloqa
				</h2>
				<p className='text-xl text-gray-400 mb-12 max-w-xl mx-auto'>
					Taklif, hamkorlik yoki shunchaki fikr almashish uchun bizga yozing.
				</p>

				<div className='flex flex-col md:flex-row justify-center items-center gap-6 mb-16'>
					<a
						href='mailto:coderkimyonazarov@gmail.com'
						className='bg-surface border border-white/10 px-8 py-6 rounded-2xl w-full md:w-auto min-w-[300px] hover:border-neon-blue/50 transition-all group'
					>
						<span className='block text-gray-500 text-sm mb-2 uppercase tracking-widest'>
							Email
						</span>
						<span className='text-xl text-white group-hover:text-neon-blue transition-colors'>
							coderkimyonazarov@gmail.com
						</span>
					</a>

					<a
						href='https://t.me/InsonMode'
						target='_blank'
						rel='noopener noreferrer'
						className='bg-surface border border-white/10 px-8 py-6 rounded-2xl w-full md:w-auto min-w-[300px] hover:border-neon-blue/50 transition-all group'
					>
						<span className='block text-gray-500 text-sm mb-2 uppercase tracking-widest'>
							Telegram
						</span>
						<span className='text-xl text-white group-hover:text-neon-blue transition-colors'>
							@InsonMode
						</span>
					</a>
				</div>

				<a
					href='mailto:coderkimyonazarov@gmail.com'
					className='inline-block bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-neon-blue hover:text-white transition-all shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transform hover:-translate-y-1'
				>
					Xat yozish
				</a>
			</div>
		</section>
	)
}

export default Contact
