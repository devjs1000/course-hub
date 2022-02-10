module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-color-dark': 'var(--color-primary-dark)',
			},
			screens: {
				xsm: '500px',
			},
		},
	},
	plugins: [],
};
