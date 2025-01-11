/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				secondary: '#FFC001',
				succes: '#04960A',
				danger: '#FF2D2D',
				gray: {
					50: '#DEDEDE',
					100: '#7b7b7b',
					200: '#888787',
					300: '##484747',
				},
			},
			fontFamily: {
				poppins: 'Poppins',
			},
		},
	},
	plugins: [],
};
