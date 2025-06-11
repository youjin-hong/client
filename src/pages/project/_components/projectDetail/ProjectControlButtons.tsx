import Button from '@/components/ui/button/Button';
import PencilIcon from '@/assets/icons/pencil';
import { useState } from 'react';
import { useDeleteProject } from '@/store/queries/project/useProjectMutations';
import CommonModal from '@/components/modal/CommonModal';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { useRunTest } from '@/store/queries/test/useTestMutations';

interface ProjectControlButtonProps {
  projectId: number;
  projectName: string;
}
export default function ProjectControlButtons({ projectId, projectName }: ProjectControlButtonProps) {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { mutate: deleteProject } = useDeleteProject();
  const { mutate: runTestMutation, isPending: isRunningTest, isError: isErrorRunningTest } = useRunTest();

  const handleRunTest = () => {
    runTestMutation(projectId);
  };

  const handleEditProjectButtonClick = () => {
    navigate(ROUTES.EDIT_PROJECT.replace(':projectId', String(projectId)));
  };

  const handleProjectDeleteButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDeleteProject = () => {
    deleteProject(projectId);
    setIsDeleteModalOpen(false);
    navigate(ROUTES.PROJECTS);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  // TODO: 테스트가 실행중이라는 것을 표현할 다른 방법으로 나중에 대체
  if (isRunningTest) return <div className="py-20 text-center">테스트 실행 중...</div>;
  if (isErrorRunningTest) return <div className="py-20 text-center text-red-500">테스트 중 오류가 발생했습니다.</div>;
  return (
    <>
      <section className="flex justify-end gap-3 pt-7">
        <Button
          text="프로젝트 수정"
          leftIcon={<PencilIcon />}
          className="flex border-none shadow-custom rounded-10 w-[118px] h-6 items-center justify-center"
          onClick={handleEditProjectButtonClick}
        />
        <div>
          <Button
            text={isRunningTest ? '테스트 중' : '테스트 재실행'}
            onClick={handleRunTest}
            className="flex border-none shadow-custom rounded-10 w-[118px] h-6 items-center justify-center"
          />
          <button
            className="block mx-auto my-4 border-0 border-b border-[#696969]  text-[#696969] font-medium text-11"
            onClick={handleProjectDeleteButtonClick}>
            프로젝트 삭제하기
          </button>
        </div>
      </section>

      <CommonModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteProject}
        title="프로젝트 삭제"
        cancelText="취소">
        {projectName}를 삭제하시겠습니까? 삭제된 프로젝트는 복구할 수 없습니다.
      </CommonModal>
    </>
  );
}
