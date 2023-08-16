import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'sky': {
        '50': '#f2fdff',
        '100': '#e6f9fc',
        '200': '#c0eefa',
        '300': '#98e1f5',
        '400': '#51c6f0',
        '500': '#0ea5e9',
        '600': '#0a8cd1',
        '700': '#076bad',
        '800': '#06508c',
        '900': '#033669',
        '950': '#011d42'
      }
    }
  },
  plugins: [],
}
export default config
