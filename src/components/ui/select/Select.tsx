import { useState } from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
};

export default function Select({ value, onChange, options, className = '' }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || options[0]?.label;

  return (
    <div className="relative w-full min-w-[100px]">
      <button
        type="button"
        className={`w-full max-h-[35px] border-[0.5px] border-typography-gray rounded-15 py-2 px-4 cursor-pointer flex justify-around items-center font-medium text-11 text-typography-dark ${className}`}
        onClick={() => setIsOpen((prev) => !prev)}>
        <span>{selectedLabel}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 z-10 mt-2 overflow-auto space-y-2">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full max-h-[35px] border-[0.5px] border-typography-gray rounded-15 py-2 px-4 cursor-pointer flex items-center justify-center font-medium text-11 text-typography-dark hover:bg-gray_2 ${className}`}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
