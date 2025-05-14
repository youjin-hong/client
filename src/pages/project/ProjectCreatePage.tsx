import { useNavigate } from 'react-router-dom';
import ProjectCreateForm from '@/pages/project/_components/projectForm/ProjectCreateForm';
import { useGenerateProject } from '@/store/queries/project/useProjectMutations';
import { useUserProfile } from '@/store/queries/user/useUserQueries';
import { GenerateProject } from '@/types/project.type';
import { ROUTES } from '@/constants';

export default function ProjectCreatePage() {
  const navigate = useNavigate();
  const { data: userData, isPending, isError } = useUserProfile();
  const generateProject = useGenerateProject();

  const handleGenerateProject = (formData: GenerateProject, actionType: 'register' | 'test') => {
    generateProject.mutate(formData, {
      onSuccess: (response) => {
        // TODO: alert나 toast로 변경
        alert(response.message);

        const projectId = response.data?.projectId;
        if (actionType === 'register') {
          navigate(ROUTES.PROJECTS);
        } else if (actionType === 'test' && projectId) {
          navigate(ROUTES.TESTS); // TODO: 테스트 세부 페이지로 바꿔야됨 일단 테스트용
        }
      },
      onError: () => {
        alert('필수 입력란을 모두 입력해주세요.');
      }
    });
  };

  const handleCancelProject = () => {
    // TODO: 나중에 현준이가 만든 팝업창으로 바꾸기 우선 confirm()으로 구현
    const isConfirmed = confirm('프로젝트 생성을 취소하시겠습니까?');
    if (isConfirmed) {
      navigate(ROUTES.HOME); // TODO: 바꿔야할 수도 있음
    }
    return;
  };

  if (isPending) {
    return <div>로딩중...</div>;
  }
  if (isError) {
    return <div>프로젝트 관리자명을 불러오는 데 오류가 발생했습니다.</div>;
  }
  if (!userData) {
    return <div>사용자 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1 className="font-bm text-16 text-typography-dark pl-4 pb-8">새 프로젝트 생성</h1>
      <ProjectCreateForm username={userData.username} onSubmit={handleGenerateProject} onCancel={handleCancelProject} />
    </div>
  );
}
