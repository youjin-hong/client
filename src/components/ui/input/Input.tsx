import { ChangeEvent, InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
}

export default function Input({
  label,
  value,
  className = '',
  required = false,
  onChange,
  onEnterPress,
  ...props
}: InputProps) {
  const inputId = useId();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnterPress) {
      onEnterPress();
    }
  };

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="block mb-2 ml-2 font-bold text-14 text-typography-dark">
          {label}
          {required && <span> (*필수)</span>}
        </label>
      )}
      <input
        id={inputId}
        type="text"
        className={`w-full border-[0.5px] border-typography-gray rounded-15 px-4 py-3 placeholder:text-typography-gray focus:border-typography-dark focus:outline-none ${className}`}
        value={value}
        onChange={onChange}
        onKeyUp={handleKeyUp}
        required={required}
        {...props}
      />
    </div>
  );
}
