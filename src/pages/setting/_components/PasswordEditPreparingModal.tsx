import CommonModal from '@/components/modal/CommonModal';

interface PasswordEditPreparingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function PasswordEditPreparingModal({ isOpen, onClose }: PasswordEditPreparingModalProps) {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose} title="알림">
      <p className="font-bold text-center text-20">비밀번호 수정 기능은 현재 준비 중입니다.</p>
    </CommonModal>
  );
}

export default PasswordEditPreparingModal;
