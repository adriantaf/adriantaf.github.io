/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pixel: ['"Press Start 2P"', 'ui-monospace', 'monospace'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
			},
			colors: {
				crt: {
					DEFAULT: '#0a0e17',
					panel: '#0f1522',
					bezel: '#1a2336',
				},
				ink: {
					DEFAULT: '#e8f0ff',
					muted: '#8b9bb8',
				},
				cyan: {
					DEFAULT: '#00e5ff',
					dim: 'rgba(0, 229, 255, 0.15)',
				},
				amber: {
					DEFAULT: '#ffbf00',
					dim: 'rgba(255, 191, 0, 0.15)',
				},
			},
			maxWidth: {
				content: '980px',
			},
			animation: {
				blink: 'blink 1.2s steps(2, start) infinite',
				'fade-up': 'fadeUp 0.55s ease-out both',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(12px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}
