/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
			colors: {
				mk: {
					chrome: '#1a1b17',
					editor: '#1e1f1c',
					fg: '#f8f8f2',
					comment: '#75715e',
					accent: '#75715e',
					keyword: '#f92672',
					string: '#e6db74',
					fn: '#a6e22e',
					type: '#66d9ef',
					number: '#ae81ff',
					param: '#fd971f',
					selection: '#49483e',
					line: '#3e3d32',
					border: '#2a2b24',
				},
			},
			animation: {
				'cursor-blink': 'cursorBlink 1.1s step-end infinite',
			},
			keyframes: {
				cursorBlink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
			},
		},
	},
	plugins: [],
}
