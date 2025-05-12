import { ReactNode } from 'react';
import Button from '@/components/ui/button/Button';

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  projectCount: number;
  testCount: number;
}

export default function DeleteAccountModal({
  isOpen,
  onClose,
  onConfirm,
  projectCount,
  testCount
}: DeleteAccountModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* 블러 처리된 배경 (헤더/사이드바 제외) */}
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#F7F7F7] rounded-[40px] w-[700px] max-w-[90vw] py-[100px] flex flex-col items-center shadow-xl">
        <div className="text-center mb-12">
          <p className="font-bold text-[20px] mb-6">
            총 {projectCount}개의 프로젝트와 {testCount}개의 미완성된 테스트가 남아 있습니다.
          </p>
          <p className="font-bold text-[20px]">계정을 삭제 하시겠습니까?</p>
        </div>
        <div className="flex gap-12 mt-8">
          <Button
            text="네"
            onClick={onConfirm}
            className="w-[120px] h-[44px] text-[18px] font-medium bg-white border border-gray-300 hover:bg-gray-100"
          />
          <Button
            text="아니요"
            onClick={onClose}
            className="w-[120px] h-[44px] text-[18px] font-medium bg-white border border-gray-300 hover:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
