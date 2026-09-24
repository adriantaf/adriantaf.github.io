/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				ink: {
					DEFAULT: '#1d1d1f',
					muted: '#6e6e73',
				},
				canvas: {
					DEFAULT: '#f5f5f7',
					elevated: '#ffffff',
				},
				accent: {
					DEFAULT: '#0071e3',
					hover: '#0077ed',
				},
			},
			maxWidth: {
				content: '980px',
			},
			animation: {
				'fade-up': 'fadeUp 0.7s ease-out both',
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(16px)', filter: 'blur(4px)' },
					'100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
				},
			},
		},
	},
	plugins: [],
}
