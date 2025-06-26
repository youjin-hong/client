import { CircularProgress, Box } from '@mui/material';

interface CircleProgressBarProps {
  value: number;
  label?: string;
  color?: string;
  size?: number;
  thickness?: number;
  className?: string;
}

export default function CircleProgressBar({
  value,
  label = 'TOTAL',
  color = '#E48989',
  size,
  thickness = 6,
  className = ''
}: CircleProgressBarProps) {
  // size prop이 있으면 사용, 없으면 반응형 클래스 사용
  const sizeStyle = size ? { width: size, height: size } : {};
  const sizeClass = size ? '' : 'w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]';

  return (
    <div className={`flex flex-col justify-center items-center gap-2 lg:gap-3 ${className}`}>
      <Box position="relative" display="inline-flex" className={sizeClass} style={sizeStyle}>
        {/* 배경 회색원 */}
        <CircularProgress
          variant="determinate"
          value={100}
          thickness={thickness}
          sx={{
            color: '#DDDDDD',
            width: '100% !important',
            height: '100% !important'
          }}
        />
        {/* 진행률 원 */}
        <CircularProgress
          variant="determinate"
          value={value}
          thickness={thickness}
          sx={{
            color: color,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100% !important',
            height: '100% !important'
          }}
        />
      </Box>

      {/* 테스트 이름, 진행률 text */}
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-11 sm:text-12 lg:text-14 text-typography-dark">{label}</p>
        <p className="font-bold text-11 sm:text-12 lg:text-14 text-typography-gray">{`${Math.round(value)}%`}</p>
      </div>
    </div>
  );
}
