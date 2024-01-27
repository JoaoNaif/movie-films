import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        widthMove: {
          '0%': {width: '50%', opacity: '0'},
          '100%': {width: '90%', opacity: '1'},
        },
      },
      animation: {
        'width-move': 'widthMove 1s ease-in '
      }
      
    },
  },
  plugins: [],
}
export default config
