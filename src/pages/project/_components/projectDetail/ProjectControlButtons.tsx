import Button from '@/components/ui/button/Button';
import PencilIcon from '@/assets/icons/pencil';
import { useState } from 'react';
import { useDeleteProject } from '@/store/queries/project/useProjectMutations';
import CommonModal from '@/components/modal/CommonModal';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants';

interface ProjectControlButtonProps {
  projectId: number;
  projectName: string;
  projectStatus: string;
  onOpenTestModal: () => void;
  isRunningTest?: boolean;
}

export default function ProjectControlButtons({
  projectId,
  projectName,
  projectStatus,
  onOpenTestModal,
  isRunningTest = false
}: ProjectControlButtonProps) {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { mutate: deleteProject } = useDeleteProject();

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

  return (
    <>
      <section className="pt-7">
        <div className="flex justify-end gap-3 mb-4">
          <Button
            text="프로젝트 수정"
            leftIcon={<PencilIcon />}
            className="flex border-none shadow-custom rounded-10 w-[118px] h-6 items-center justify-center"
            onClick={handleEditProjectButtonClick}
          />

          {projectStatus === 'COMPLETED' && (
            <Button
              text={isRunningTest ? '테스트 중' : '테스트 재실행'}
              onClick={onOpenTestModal}
              disabled={isRunningTest}
              className="flex border-none shadow-custom rounded-10 w-[118px] h-6 items-center justify-center"
            />
          )}
        </div>

        <div className="flex justify-end">
          <button
            className="border-0 border-b border-[#696969] text-[#696969] font-medium text-11 hover:text-gray-800 transition-colors"
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
