import { ReactNode } from 'react';
import Button from '@/components/ui/button/Button';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
}

export default function CommonModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText = '확인',
  cancelText = '취소',
  showCancel = true,
  confirmButtonClassName = '',
  cancelButtonClassName = ''
}: CommonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#F7F7F7] rounded-[40px] w-[700px] max-w-[90vw] py-[100px] flex flex-col items-center shadow-xl">
        {title && <div className="text-center mb-8 font-bold text-[20px]">{title}</div>}
        <div className="text-center mb-12">{children}</div>
        <div className="flex gap-12 mt-8">
          {onConfirm && (
            <Button
              text={confirmText}
              onClick={onConfirm}
              className={`w-[120px] h-[44px] text-[18px] font-medium bg-white border border-gray-300 hover:bg-gray-100 ${confirmButtonClassName}`}
            />
          )}
          {showCancel && (
            <Button
              text={cancelText}
              onClick={onClose}
              className={`w-[120px] h-[44px] text-[18px] font-medium bg-white border border-gray-300 hover:bg-gray-100 ${cancelButtonClassName}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
