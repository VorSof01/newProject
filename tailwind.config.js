/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './src/page/**/*.{js,vue,ts}',
    './src/app/**/*.{js,vue,ts}',
    './src/widgets/**/*.{js,vue,ts}',
    './src/shared/**/*.{js,vue,ts}',
    './src/feature/**/*.{js,vue,ts}',
    './src/entities/**/*.{js,vue,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,vue,ts}',
    './error.{js,vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        DEFAULT: '#2A3039',
      },
      borderRadius: {
        DEFAULT: '8px'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xs: ['10px', '14px'],
      sm: ['12px', '16px'],
      DEFAULT: ['14px', '18px'],
      lg: ['16px', '20px'],
      code: ['18px', '26px'],
      title: ['20px', '26px']
    }
  },
  plugins: [],
}

