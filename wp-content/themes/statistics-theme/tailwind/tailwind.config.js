// Set the Preflight flag based on the build target.
const includePreflight = 'editor' === process.env._TW_TARGET ? false : true;

module.exports = {
	presets: [
		// Manage Tailwind Typography's configuration in a separate file.
		require('./tailwind-typography.config.js'),
	],
	content: [
		// Ensure changes to PHP files and `theme.json` trigger a rebuild.
		'./theme/**/*.php',
		'./theme/theme.json',
	],
	theme: {
		// Extend the default Tailwind theme.
		extend: {
			fontFamily: {
				sans: ['Ubuntu', 'sans-serif'],
			},
			fontSize: {
				'xxs':	'0.625rem',
				'xl':		'1.3125rem',
				'2xl':	'1.625rem',
				'3xl':	'1.75rem',
				'4xl':	'2.375rem',
				'5xl':	'3.125rem',
				'6xl':	'4.125rem',
			},
			colors: {
				'primary': {
					'50':		'#C3E0F5',
					'100':	'#92C5EB',
					'200':	'#417DC0',
					'300':	'#1754A5',
					'400':	'#133356',
				},
				secondary: {
					'50':		'#F7F7F7',
					'100':	'#EDEFF3',
					'200':	'#CED5E1',
					'300':	'#B7BDC7',
					'400':	'#60676F',
					'500': 	'#3E4653',
				},
				'orange': '#F79521',
				'yellow': '#FFC40E',
				'green': 	'#328042',
			}
		},
	},
	corePlugins: {
		// Disable Preflight base styles in builds targeting the editor.
		preflight: includePreflight,
	},
	plugins: [
		// Extract colors and widths from `theme.json`.
		require('@_tw/themejson')(require('../theme/theme.json')),

		// Add Tailwind Typography.
		require('@tailwindcss/typography'),

		// Uncomment below to add additional first-party Tailwind plugins.
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/aspect-ratio'),
		// require('@tailwindcss/container-queries'),
	],
};
