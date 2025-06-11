// import ProjectCreateForm from '@/pages/project/_components/projectForm/ProjectCreateForm';
// import { useGetProjectDetail } from '@/store/queries/project/useProjectQueries';
// import { useParams } from 'react-router-dom';

export default function ProjectModifyPage() {
  // const params = useParams();
  // const projectId = params.projectId;
  // const { data: projectDetail, isPending, isError } = useGetProjectDetail(Number(projectId));

  // if (isPending) return <div className="py-20 text-center">로딩 중...</div>;
  // if (isError) return <div className="py-20 text-center text-red-500">오류가 발생했습니다.</div>;

  return (
    <div className="w-[90%] m-auto">
      {/* <h1 className="font-bm text-16 text-typography-dark pl-4 pb-8">새 프로젝트 생성</h1>
      <ProjectCreateForm username={userData.username} onSubmit={handleGenerateProject} onCancel={handleCancelProject} /> */}
      수정페이지임
    </div>
  );
}
