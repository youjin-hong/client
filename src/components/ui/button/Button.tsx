import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
  text?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  children,
  text,
  className = '',
  disabled,
  leftIcon,
  rightIcon,
  onClick,
  ...props
}: ButtonProps) {
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
    flex
    justify-center
    items-center
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
    <button className={`${className ?? ''} ${baseClasses}`} disabled={disabled} onClick={handleClick} {...props}>
      {leftIcon && <span className="flex items-center mr-1">{leftIcon}</span>}
      {text || children}
      {rightIcon && <span className="flex items-center ml-1">{rightIcon}</span>}
    </button>
  );
}
