interface LinearProgressBar2Props {
  value?: number;
  className?: string;
  color?: string;
  label?: string;
}

export default function LinearProgressBar2({
  value = 0,
  className = '',
  color = '#E48989',
  label = ''
}: LinearProgressBar2Props) {
  return (
    <div className={`w-full ${className}`}>
      {/* 테스트 이름 넣기 */}
      <div className="flex justify-center mb-2">
        <span className="font-bold text-14 text-typography-dark max-sm:text-11">{label}</span>
      </div>
      {/* 진행률 나타내는 bar */}
      <div className="flex items-center gap-2">
        <div className="w-full bg-[#DDDDDD] rounded-20 h-8 overflow-hidden relative max-sm:h-4">
          <div
            className="h-full rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${value}%`, backgroundColor: color }}
          />
        </div>
        <span className="font-bold text-14 text-typography-dark">{value}%</span>
      </div>
    </div>
  );
}
