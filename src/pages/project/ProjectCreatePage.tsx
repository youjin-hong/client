import { ROUTES } from '@/constants';
import ProjectCreateForm from '@/pages/project/_components/projectForm/ProjectCreateForm';
import { useProjectForm } from '@/pages/project/_hooks/useCreateProject';
import { useUserProfile } from '@/store/queries/user/useUserQueries';
import { useNavigate } from 'react-router-dom';

export default function ProjectCreatePage() {
  const navigate = useNavigate();
  const { data: userData, isPending: isUserDataLoading, isError: isUserDataError } = useUserProfile();

  const handleNavigate = (actionType: 'register' | 'test', projectId?: number) => {
    if (actionType === 'register') {
      navigate(ROUTES.PROJECT_DETAIL.replace(':projectId', String(projectId)));
    } else if (actionType === 'test') {
      navigate(ROUTES.TESTS);
    }
  };

  const { handleProjectSubmit, isLoading } = useProjectForm(userData, handleNavigate);

  const handleCancelProject = () => {
    const isConfirmed = confirm('프로젝트 생성을 취소하시겠습니까?');
    if (isConfirmed) {
      navigate(ROUTES.HOME); // TODO: confirm 부분 나중에 modal로 바꾸기
    }
  };

  if (isUserDataLoading) return <div className="py-20 text-center">사용자 정보 로딩 중...</div>;
  if (isUserDataError || !userData)
    return <div className="py-20 text-center text-red-500">사용자 정보 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div className="w-[90%] m-auto">
      <h1 className="font-bm text-16 text-typography-dark pl-4 pb-8">새 프로젝트 생성</h1>
      <ProjectCreateForm
        username={userData.username}
        onSubmit={handleProjectSubmit}
        onCancel={handleCancelProject}
        isLoading={isLoading}
      />
    </div>
  );
}
