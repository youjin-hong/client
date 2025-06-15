import ProjectCreateForm from '@/pages/project/_components/projectForm/ProjectCreateForm';
import { useProjectFromHandler } from '@/pages/project/_hooks/useProjectFromHandler';
import { BeatLoader } from 'react-spinners';

export default function ProjectModifyPage() {
  const { isPending, isError, username, initialValues, handleProjectSubmit, handleCancelProject, isLoading } =
    useProjectFromHandler({
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
      <h1 className="font-bm text-16 text-typography-dark pl-4 pb-8">새 프로젝트 생성</h1>
      <ProjectCreateForm
        username={username}
        initialValues={initialValues}
        onSubmit={handleProjectSubmit}
        onCancel={handleCancelProject}
        isLoading={isLoading}
      />
    </div>
  );
}
