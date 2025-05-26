import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';
import SettingTitle from '@/pages/setting/_components/SettingTitle';
import usePasswordEditForm from '@/hooks/usePasswordEditForm';
import PasswordEditPreparingModal from '@/pages/setting/_components/PasswordEditPreparingModal';

function PasswordEditPage() {
  const {
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
  } = usePasswordEditForm();

  return (
    <div className="w-[90%] mx-auto space-y-8">
      <SettingTitle />
      <div className="space-y-5">
        <div>
          <Input
            label="현재 비밀번호"
            type="password"
            value={currentPassword}
            onChange={(e) => handleCurrentPasswordChange(e.target.value)}
          />
          {errors.currentPassword && <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>}
        </div>
        <div>
          <Input
            label="새 비밀번호"
            type="password"
            value={newPassword}
            onChange={(e) => handleNewPasswordChange(e.target.value)}
          />
          {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
        </div>
        <div>
          <Input
            label="새 비밀번호 확인"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => handleConfirmNewPasswordChange(e.target.value)}
          />
          {errors.confirmNewPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmNewPassword}</p>}
        </div>
      </div>
      <Button
        text="비밀번호 수정"
        className="w-48 block mx-auto font-medium text-11 text-typography-dark"
        onClick={handleSubmit}
      />

      <PasswordEditPreparingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default PasswordEditPage;
