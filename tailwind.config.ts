import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      // => @media (max-width: 1536px) { ... }        

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      screens: {
        'min-sm': { 'min': '639px' },
        // => @media (min-width: 639px) { ... }

        'min-md': { 'min': '767px' },
        // => @media (min-width: 767px) { ... }

        'min-lg': { 'min': '1023px' },
        // => @media (min-width: 1023px) { ... }

        'min-xl': { 'min': '1279px' },
        // => @media (min-width: 1279px) { ... }

        'min-2xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }     

        '2lg': { max: '1190px' },
        // => @media (max-width: 1535px) { ... }
      },
      fontFamily: {
        sans: 'var( --font-roboto)',
        alt: 'var( --alt-inter)',
      },
      colors: {
        azulIndigo: "#1B257F",
        azulPetrolio: "#161C33",
      },
    },
    plugins: [],
  }
}
export default config
