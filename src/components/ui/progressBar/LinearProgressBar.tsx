interface LinearProgressBarProps {
  value: string;
  className?: string;
  color?: string;
  success?: number;
  total?: number;
}

export default function LinearProgressBar({
  value,
  className = '',
  color = 'bg-blue-500',
  success,
  total
}: LinearProgressBarProps) {
  return (
    <div className="flex items-center gap-5">
      <span className="font-semibold text-11">
        {success}/{total}
      </span>
      <div className={`h-2.5 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 ${className}`}>
        <div
          className={`h-full ${color} rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
