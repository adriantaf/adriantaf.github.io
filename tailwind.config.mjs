/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
        mono: ['UbuntuSansMono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
			minHeight: {
				'full-main': 'calc(100dvh - 56px)'
			}
		},
	},
	plugins: [],
}
