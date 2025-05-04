import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
  text?: string;
}

export default function Button({ children, text, className = '', disabled, onClick, ...props }: ButtonProps) {
  const baseClasses = `
    rounded-10
    text-11
    text-typography-dark
    transition-colors
    border border-button-border
    bg-button-default
    hover:bg-button-hover
    active:bg-button-press
    disabled:opacity-50
    disabled:cursor-not-allowed
    py-2 
    px-4
  `;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button className={`${baseClasses} ${className}`.trim()} disabled={disabled} onClick={handleClick} {...props}>
      {text || children}
    </button>
  );
}
