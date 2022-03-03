module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-color-dark': 'var(--color-primary-dark)',
				'primary-color-light': 'var(--color-primary-light)',
			},
			screens: {
				xsm: '500px',
			},
		},
	},
	plugins: [],
};
