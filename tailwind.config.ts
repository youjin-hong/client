import { typography } from './src/styles/theme/typography';
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
      colors: colors,
      borderRadius: shape.radius,
      boxShadow: shape.boxShadow,
      fontSize: typography.fontSize
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *'); // 직계 자식 선택
      addVariant('all', '& *'); // 모든 후손 선택
    }
  ]
};
