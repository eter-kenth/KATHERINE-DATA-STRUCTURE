/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
		  boxShadow: {
			'custom': '0px 0px 20px rgba(73, 130, 166)',
		  },
		  borderWidth: {
			'3': '3px'// Añade el grosor de borde de 4px
		  },
		}
	  },
}
