import { typography } from './src/styles/theme/typography';
import { colors } from './src/styles/theme/colors';
import { shape } from './src/styles/theme/shape';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */

const angleDeg = 33.4396 + 90;
const angleRad = (angleDeg * Math.PI) / 180;
const dist = 500;

const dx = Math.cos(angleRad) * dist; // x 이동 거리
const dy = Math.sin(angleRad) * dist; // y 이동 거리

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
    },
    keyframes: {
      flowAlongLine: {
        '0%': { transform: 'translate(0, 0)' },
        '100%': { transform: `translate(${dx}px, ${dy}px)` }
      }
    },
    animation: {
      'flow-line': 'flowAlongLine 30s linear infinite'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *'); // 직계 자식 선택
      addVariant('all', '& *'); // 모든 후손 선택
    }
  ]
};
