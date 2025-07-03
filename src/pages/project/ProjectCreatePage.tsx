import CommonModal from '@/components/modal/CommonModal';
import PageLoader from '@/components/ui/loader/PageLoader';
import ProjectCreateForm from '@/pages/project/_components/projectForm/ProjectCreateForm';
import { useProjectFormHandler } from '@/pages/project/_hooks/useProjectFormHandler';

export default function ProjectCreatePage() {
  const {
    isPending,
    isError,
    username,
    handleProjectSubmit,
    handleCancelProject,
    isRegisterLoading,
    isTestLoading,
    isCancelModalOpen,
    handleCloseCancelModal,
    handleConfirmCancelProject
  } = useProjectFormHandler({
    mode: 'create'
  });

  if (isPending) return <PageLoader />;
  if (isError || !username)
    return <div className="py-20 text-center text-red-500">사용자 정보 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div className="w-[90%] m-auto">
      <h1 className="font-bm text-16 text-typography-dark pl-4 pb-8">새 프로젝트 생성</h1>
      <ProjectCreateForm
        mode="create"
        username={username}
        onSubmit={handleProjectSubmit}
        onCancel={handleCancelProject}
        isRegisterLoading={isRegisterLoading}
        isTestLoading={isTestLoading}
      />
      <CommonModal
        isOpen={isCancelModalOpen}
        onClose={handleCloseCancelModal}
        onConfirm={handleConfirmCancelProject}
        title="프로젝트 생성 취소"
        cancelText="취소">
        프로젝트 생성을 취소하시겠습니까? 입력한 내용이 모두 사라집니다.
      </CommonModal>
    </div>
  );
}
