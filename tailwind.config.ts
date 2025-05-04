import { colors } from './src/styles/theme/colors';
import { shape } from './src/styles/theme/shape';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', ...defaultTheme.fontFamily.sans],
        bm: ['BMDOHYEON', ...defaultTheme.fontFamily.sans],
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...colors
      },
      borderRadius: {
        ...shape.radius
      }
    }
  },
  plugins: []
};
