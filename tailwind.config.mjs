/**
 * tailwind.config.mjs
 *
 * NOTE: This project uses Tailwind CSS v4 via @tailwindcss/vite.
 * In Tailwind v4 the runtime configuration is driven by CSS directives
 * in src/styles/global.css (@plugin, CSS variables, etc.).
 * This file is retained for IDE auto-complete and tooling reference only.
 *
 * ┌─ Brand palette reference ─────────────────────────────────────────┐
 * │  primary  (brand magenta)  #EF0081 ≈ oklch(0.570 0.295 333.0)    │
 * │  base-100 (pure white)     #FFFFFF = oklch(1.000 0.000   0.0)    │
 * │  base-200 (off-white)               oklch(0.972 0.003 240.0)     │
 * │  base-content (near-black)          oklch(0.185 0.010 250.0)     │
 * │  .bg-tile (blog tile grey)          oklch(0.965 0.004 240.0)     │
 * └───────────────────────────────────────────────────────────────────┘
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        /* Full magenta scale — keep DEFAULT in sync with --color-primary */
        magenta: {
          DEFAULT: '#EF0081',
          50: '#fff0f8',
          100: '#ffe0f2',
          200: '#ffc2e6',
          300: '#ff91cf',
          400: '#ff4aaf',
          500: '#EF0081', /* brand anchor */
          600: '#d4006f',
          700: '#b2005c',
          800: '#93004c',
          900: '#7a0040',
          950: '#3d0020',
        },
        /* Blog tile / subtle section bg */
        tile: 'oklch(0.965 0.004 240)',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  /* DaisyUI config (reference for v5 theme defined via CSS variables) */
  daisyui: {
    themes: [
      {
        corporate: {
          'primary': '#EF0081',
          'primary-content': '#ffffff',
          'secondary': '#4b5a72',
          'accent': '#2e7aad',
          'neutral': '#374151',
          'base-100': '#ffffff',
          'base-200': '#f5f6f8',
          'base-300': '#e8eaed',
          'base-content': '#1a1b1e',
        },
      },
    ],
    defaultTheme: 'corporate',
    logs: false,
  },
};
