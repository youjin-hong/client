export const validatePassword = (newPassword: string, confirmNewPassword: string) => {
  const errors: { newPassword?: string; confirmNewPassword?: string } = {};
  if (newPassword.length < 8) {
    errors.newPassword = '새 비밀번호는 8자 이상이어야 합니다.';
  }
  if (newPassword !== confirmNewPassword) {
    errors.confirmNewPassword = '새 비밀번호와 확인 비밀번호가 일치하지 않습니다.';
  }
  return errors;
};
