import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light': '#D9D9D9',
      'dark' : '#ACACAC',
      'light-2' :'#DADADA',
      'light-text' : '#8D8D8D',
      'dark-text' : '#979797',
      'lighter-text' : '#BDBDBD',
      transparent: 'transparent',
      'black' : 'black',
      'white' : 'white',
      'green' : '#3AAE2A',
      'hover-green' : '#457540',
      'dark-border' :'#878787',
      'light-border' : '#DDDDDD',
      'error-text' : '#FF0000'
      
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        variable: ['--font-momentum']
      }
    },
  },
  plugins: [],
}
export default config
