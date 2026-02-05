/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'neon-blue': 'var(--color-primary)',
				'neon-red': 'var(--color-secondary)',
				'neon-purple': 'var(--color-accent)',
				surface: 'var(--color-surface)',
			},
			fontFamily: {
				sans: ['var(--font-main)'],
			},
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
		},
	},
	plugins: [],
}
