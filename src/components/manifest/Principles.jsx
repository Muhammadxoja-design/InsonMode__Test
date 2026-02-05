const Principles = () => {
	const principles = [
		{
			title: 'Ongli tanlov',
			desc: 'Har bir harakat avtomatizm emas, tanlov bo‘lsin.',
		},
		{ title: 'Soddalik', desc: 'Murakkablikdan qochib, mohiyatga intilish.' },
		{
			title: 'Hamjamiyat',
			desc: 'Yolg‘iz emas, fikrdoshlar bilan birga o‘sish.',
		},
	]

	return (
		<section className='py-24 bg-black'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-white mb-4'>Tamoyillar</h2>
					<p className='text-gray-400'>
						Bizni ushlab turadigan 4 asosiy ustun.
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{principles.map((p, i) => (
						<div
							key={i}
							className='p-8 border border-white/10 bg-gray-900/30 rounded-2xl text-center hover:bg-gray-900/50 transition-colors'
						>
							<h3 className='text-2xl font-bold text-white mb-4'>{p.title}</h3>
							<p className='text-gray-400'>{p.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Principles
