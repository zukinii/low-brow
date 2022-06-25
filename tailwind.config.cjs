const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#F5FC00'
			},
			fontFamily: {
				copy: ['"Helvetica Condensed"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
				heading: [
					'"Neue Helvetica Compressed"',
					'"Helvetica Neue"',
					'Helvetica',
					'Arial',
					'sans-serif'
				]
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '2.75rem'
				}
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					mi: (value) => ({
						'margin-inline': value
					}),
					mis: (value) => ({
						'margin-inline-start': value
					}),
					mie: (value) => ({
						'margin-inline-end': value
					}),
					mbl: (value) => ({
						'margin-block': value
					}),
					mbs: (value) => ({
						'margin-block-start': value
					}),
					mbe: (value) => ({
						'margin-block-end': value
					}),
					pi: (value) => ({
						'padding-inline': value
					}),
					pis: (value) => ({
						'padding-inline-start': value
					}),
					pie: (value) => ({
						'padding-inline-end': value
					}),
					pbl: (value) => ({
						'padding-block': value
					}),
					pbs: (value) => ({
						'padding-block-start': value
					}),
					pbe: (value) => ({
						'padding-block-end': value
					})
				},
				{ values: { ...theme('spacing'), auto: 'auto' } }
			)
		})
	]
}

module.exports = config
