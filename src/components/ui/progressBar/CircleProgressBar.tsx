import { CircularProgress, Box } from '@mui/material';

interface CircleProgressBarProps {
  value: number;
  label?: string;
  color?: string;
  size?: number;
  thickness?: number;
}
export default function CircleProgressBar({
  value,
  label = 'TOTAL',
  color = '#E48989',
  size = 150,
  thickness = 6
}: CircleProgressBarProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Box position="relative" display="inline-flex">
        {/* 배경 회색원 */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={thickness}
          sx={{
            color: '#DDDDDD'
          }}
        />
        {/* 진행률 원 */}
        <CircularProgress
          variant="determinate"
          value={value}
          size={size}
          thickness={thickness}
          sx={{
            position: 'absolute',
            left: 0,
            color: color
          }}
        />
      </Box>
      {/* 테스트 이름, 진행률 text */}
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <p className="font-bold text-14 text-typography-dark">{label}</p>
        <p className="font-bold text-14 text-typography-gray">{`${Math.round(value)}%`}</p>
      </Box>
    </div>
  );
}
