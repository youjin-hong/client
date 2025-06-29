import CommonModal from '@/components/modal/CommonModal';
import ProjectCreateForm from '@/pages/project/_components/projectForm/ProjectCreateForm';
import { useProjectFormHandler } from '@/pages/project/_hooks/useProjectFormHandler';
import { BeatLoader } from 'react-spinners';

export default function ProjectModifyPage() {
  const {
    isPending,
    isError,
    username,
    initialValues,
    handleProjectSubmit,
    handleCancelProject,
    isCancelModalOpen,
    handleCloseCancelModal,
    handleConfirmCancelProject
  } = useProjectFormHandler({
    mode: 'modify'
  });

  if (isPending)
    return (
      <div className="py-20 text-center">
        <BeatLoader color="#B3C7AA" size={15} />
      </div>
    );
  if (isError) return <div className="py-20 text-center text-red-500">오류가 발생했습니다.</div>;

  return (
    <div className="w-[90%] m-auto">
      <h1 className="font-bm text-16 text-typography-dark pl-4 pb-8">프로젝트 수정</h1>
      <ProjectCreateForm
        mode="modify"
        username={username}
        initialValues={initialValues}
        onSubmit={handleProjectSubmit}
        onCancel={handleCancelProject}
      />
      <CommonModal
        isOpen={isCancelModalOpen}
        onClose={handleCloseCancelModal}
        onConfirm={handleConfirmCancelProject}
        title="프로젝트 수정 취소"
        cancelText="취소">
        프로젝트 수정을 취소하시겠습니까? 수정한 내용이 모두 사라집니다.
      </CommonModal>
    </div>
  );
}
