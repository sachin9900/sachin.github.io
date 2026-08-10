import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#dbeeff',
          200: '#b7ddff',
          300: '#85c2ff',
          400: '#4b9cff',
          500: '#2170f1',
          600: '#1a58c9',
          700: '#1846a1',
          800: '#163b82',
          900: '#132f67'
        }
      },
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
