import { useDeleteAccount } from '@/store/queries/user/useUserMutations';
import { useAppDispatch } from '@/store/redux/store';
import { logout } from '@/store/redux/reducers/auth';
import { useNavigate } from 'react-router-dom';
import CommonModal from '@/components/modal/CommonModal';

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectCount: number;
  testCount: number;
}

export default function DeleteAccountModal({ isOpen, onClose, projectCount, testCount }: DeleteAccountModalProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteAccountMutation = useDeleteAccount();

  const handleDelete = () => {
    deleteAccountMutation.mutate(undefined, {
      onSuccess: () => {
        alert('회원 탈퇴가 완료되었습니다.');
        dispatch(logout());
        onClose();
        navigate('/landing');
      },
      onError: (error: any) => {
        if (error?.response?.status === 401) {
          alert('세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.');
          dispatch(logout());
          onClose();
          navigate('/login');
        } else {
          alert('회원 탈퇴에 실패했습니다. 다시 시도해주세요.');
          onClose();
        }
      }
    });
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleDelete}
      confirmText="네"
      cancelText="아니오"
      title="계정 삭제">
      <p className="font-bold text-[20px] mb-6">
        총 {projectCount}개의 프로젝트와 {testCount}개의 미완성된 테스트가 남아 있습니다.
      </p>
      <p className="font-bold text-[20px]">계정을 삭제 하시겠습니까?</p>
    </CommonModal>
  );
}
