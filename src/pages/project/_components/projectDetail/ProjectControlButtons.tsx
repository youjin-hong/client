import Button from '@/components/ui/button/Button';
import PencilIcon from '@/assets/icons/pencil';
import { useState } from 'react';
import { useDeleteProject } from '@/store/queries/project/useProjectMutations';
import CommonModal from '@/components/modal/CommonModal';

interface ProjectControlButtonProps {
  projectId: number;
  projectName: string;
}
export default function ProjectControlButtons({ projectId, projectName }: ProjectControlButtonProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { mutate: deleteProject } = useDeleteProject();

  const handleProjectDeleteButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDeleteProject = () => {
    deleteProject(projectId);
    setIsDeleteModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  return (
    <>
      <section className="flex justify-end gap-3 pt-7">
        <Button
          text="수정하기"
          leftIcon={<PencilIcon />}
          className="flex border-none shadow-custom rounded-10 w-[118px] h-6 items-center justify-center"
        />
        <Button
          text="삭제하기"
          className="border-none shadow-custom rounded-10 w-[118px] h-6 flex items-center justify-center"
          onClick={handleProjectDeleteButtonClick}
        />
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
