import ProjectCreateForm from '@/pages/project/_components/ProjectCreateForm';
import { useGenerateProject } from '@/store/queries/project/useProjectMutations';
import { useUserProfile } from '@/store/queries/user/useUserQueries';
import { GenerateProject } from '@/types/project.type';

export default function ProjectCreatePage() {
  const { data: userData, isPending, isError } = useUserProfile();
  const generateProject = useGenerateProject();

  const handleGenerateProject = (formData: GenerateProject) => {
    generateProject.mutate(formData, {
      onSuccess: (response) => {
        // TODO: alert나 toast로 변경
        alert(response.message);
      },
      onError: (error) => {
        alert(error?.message);
      }
    });
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
      <ProjectCreateForm username={userData.username} onSubmit={handleGenerateProject} />
    </div>
  );
}
