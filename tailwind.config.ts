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
      // => @media (max-width: 1279px) { ... }        

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
      fontFamily: {
        sans: 'var( --font-roboto)',
        alt: 'var( --alt-inter)',
      },
      colors: {
        azulIndigo: "#1B257F",
        azulPetrolio: "#161C33",
      },
      backgroundImage: {
        bgHome: "linear-gradient(180deg, #D4D4D8 6%, #FAFAFA 100%)",
      },
      boxShadow: {
        default: "2px 4px 4px 2px rgba(0, 0, 0, 0.35)",
      },
      // screens: {
      //   '2xl': { 'max': '1536px' },
      //   // => @media (max-width: 1279px) { ... }        

      //   'xl': { 'max': '1279px' },
      //   // => @media (max-width: 1279px) { ... }

      //   'lg': { 'max': '1023px' },
      //   // => @media (max-width: 1023px) { ... }

      //   'md': { 'max': '767px' },
      //   // => @media (max-width: 767px) { ... }

      //   'sm': { 'max': '639px' },
      //   // => @media (max-width: 639px) { ... }
      // }
    },
    plugins: [],
  }
}
export default config
