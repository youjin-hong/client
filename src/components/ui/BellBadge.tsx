import React from 'react';

interface BellBadgeProps {
  show?: boolean;
  badgeContent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function BellBadge({ show, badgeContent, children, className }: BellBadgeProps) {
  return (
    <span className="relative inline-block">
      {children}
      {show && (
        <span
          className={`absolute -top-1 -right-1 flex items-center justify-center w-3 h-3 rounded-full bg-red-500 text-white text-[10px] font-bold shadow ${className || ''}`}>
          {badgeContent || ''}
        </span>
      )}
    </span>
  );
}
