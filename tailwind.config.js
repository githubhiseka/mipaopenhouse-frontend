/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				sunborn: ['Sunborn', 'sans-serif'],
			},
			dropShadow: {
				'title' : '0 0 20px #FFE37F'
			}
		},
	},
	plugins: [],
};
