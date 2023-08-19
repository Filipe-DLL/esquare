import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      }
    },
    plugins: [],
  }
}
export default config
