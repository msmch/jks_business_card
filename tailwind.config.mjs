/**
 * tailwind.config.mjs
 *
 * NOTE: This project uses Tailwind CSS v4 via @tailwindcss/vite.
 * In Tailwind v4 the runtime configuration is driven by CSS directives
 * in src/styles/global.css (@plugin, CSS variables, etc.).
 * This file is retained for IDE auto-complete and tooling reference only.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        // Keeping custom font configuration intact
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  /* DaisyUI config references the theme defined via CSS variables */
  daisyui: {
    themes: ['corporate'],
    defaultTheme: 'corporate',
    logs: false,
  },
};