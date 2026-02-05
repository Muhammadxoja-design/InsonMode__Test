import { useState } from 'react'

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null)

	const questions = [
		{
			q: 'Inson Mode kimlar uchun?',
			a: 'O‘z diqqatini qadrlaydigan, zamonaviy shovqindan charchagan va ongli hayot kechirishni istagan har bir inson uchun.',
		},
		{
			q: 'Qancha vaqt natija beradi?',
			a: 'Ilk o‘zgarishlarni 3-7 kun ichida sezasiz. To‘liq ko‘nikma hosil qilish uchun 21-60 kun talab qilinishi mumkin.',
		},
		{
			q: 'Texnologiyani butunlay tark etamizmi?',
			a: 'Yo‘q, biz texnologiyaga qarshi emasmiz. Biz uning quliga aylanmaslik va undan ongli foydalanish tarafdorimiz.',
		},
		{
			q: "Inson Mode'ni birga quramizmi?",
			a: 'Ha! Bu jamoaviy harakat. Biz bir-birimizni qo‘llab-quvvatlaymiz va tajriba almashamiz.',
		},
	]

	return (
		<section className='py-24 bg-surface'>
			<div className='container mx-auto px-4 max-w-3xl'>
				<h2 className='text-4xl font-bold text-white mb-12 text-center'>
					Savollar
				</h2>

				<div className='space-y-4'>
					{questions.map((item, index) => (
						<div
							key={index}
							className='border border-white/10 rounded-2xl overflow-hidden bg-black'
						>
							<button
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className='w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none'
							>
								<span className='text-lg font-medium text-white'>{item.q}</span>
								<span
									className={`text-neon-blue transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
								>
									▼
								</span>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
							>
								<div className='p-6 pt-0 text-gray-400 border-t border-white/5'>
									{item.a}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FAQ
