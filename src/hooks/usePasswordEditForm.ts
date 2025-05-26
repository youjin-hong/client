import { useState } from 'react';
import { validatePassword } from '@/utils/validation';

interface PasswordEditErrors {
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

const usePasswordEditForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errors, setErrors] = useState<PasswordEditErrors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 현재 비밀번호 변경 핸들러 (클라이언트 예시 유효성 검사 포함)
  const handleCurrentPasswordChange = (value: string) => {
    setCurrentPassword(value);
    // TODO: 실제 백엔드 API 호출로 대체 필요
    if (value === 'test1234') {
      // 예시 올바른 비밀번호
      setErrors((prev) => ({ ...prev, currentPassword: undefined }));
    } else if (value !== '') {
      setErrors((prev) => ({ ...prev, currentPassword: '현재 비밀번호가 일치하지 않습니다.' }));
    } else {
      setErrors((prev) => ({ ...prev, currentPassword: undefined }));
    }
  };

  // 새 비밀번호 변경 핸들러 (유효성 검사 포함)
  const handleNewPasswordChange = (value: string) => {
    setNewPassword(value);
    const newPasswordErrors = validatePassword(value, confirmNewPassword);
    setErrors((prev) => ({
      ...prev,
      newPassword: newPasswordErrors.newPassword,
      confirmNewPassword: newPasswordErrors.confirmNewPassword
    }));
  };

  // 새 비밀번호 확인 변경 핸들러 (유효성 검사 포함)
  const handleConfirmNewPasswordChange = (value: string) => {
    setConfirmNewPassword(value);
    const newPasswordErrors = validatePassword(newPassword, value);
    setErrors((prev) => ({
      ...prev,
      newPassword: newPasswordErrors.newPassword,
      confirmNewPassword: newPasswordErrors.confirmNewPassword
    }));
  };

  const handleSubmit = () => {
    // 제출 시 최종 유효성 검사
    const currentPasswordError = currentPassword === 'test1234' ? undefined : '현재 비밀번호가 일치하지 않습니다.'; // TODO: 실제 API 결과로 대체
    const newPasswordErrors = validatePassword(newPassword, confirmNewPassword);

    const combinedErrors: PasswordEditErrors = { ...newPasswordErrors, currentPassword: currentPasswordError };

    setErrors(combinedErrors);

    if (Object.keys(combinedErrors).every((key) => combinedErrors[key as keyof PasswordEditErrors] === undefined)) {
      // 유효성 검사 통과 시 모달 표시
      setIsModalOpen(true);
      console.log('비밀번호 수정 유효성 검사 통과');
      console.log('현재 비밀번호:', currentPassword);
      console.log('새 비밀번호:', newPassword);
      // TODO: 비밀번호 수정 API 호출 로직은 모달 닫기 후 또는 별도 버튼 액션으로 이동 고려
    } else {
      console.log('비밀번호 수정 유효성 검사 실패', combinedErrors);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    currentPassword,
    handleCurrentPasswordChange,
    newPassword,
    handleNewPasswordChange,
    confirmNewPassword,
    handleConfirmNewPasswordChange,
    errors,
    handleSubmit,
    isModalOpen,
    closeModal
  };
};

export default usePasswordEditForm;
