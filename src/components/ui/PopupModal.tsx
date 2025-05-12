import { ReactNode } from 'react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function PopupModal({
  isOpen,
  onClose,
  title,
  children,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel
}: PopupModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-20 p-6 w-[400px] max-w-[90%] shadow-lg">
        {/* Title */}
        <h2 className="text-20 font-bold mb-4">{title}</h2>

        {/* Content */}
        <div className="mb-6">{children}</div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-10 transition-colors">
              {cancelText}
            </button>
          )}
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-10 transition-colors">
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
