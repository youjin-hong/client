import { useParams } from 'react-router-dom';
import { useGetProjectDetail } from '@/store/queries/project/useProjectQueries';
import DesignSourceSection from '@/pages/project/_components/projectForm/DesignSourceSection';
import ProjectTitle from '@/pages/project/_components/ProjectTitle';
import ProjectInfo from '@/pages/project/_components/projectDetail/ProjectInfo';
import ReportBrief from '@/pages/project/_components/projectDetail/ReportBrief';
import ProjectControlButtons from '@/pages/project/_components/projectDetail/ProjectControlButtons';
import ProjectPageTable from '@/pages/project/_components/projectDetail/ProjectPageTable';
import ProjectSummaryGraph from '@/pages/project/_components/projectDetail/ProjectSummaryGraph';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId;
  const { data: projectDetail, isPending, isError } = useGetProjectDetail(Number(projectId));

  if (isPending) return <div className="py-20 text-center">로딩 중...</div>;
  if (isError) return <div className="py-20 text-center text-red-500">오류가 발생했습니다.</div>;

  const projectBasicInfo = {
    projectName: projectDetail?.projectName,
    projectCreatedDate: projectDetail?.projectCreatedDate,
    projectEnd: projectDetail?.projectEnd,
    projectAdmin: projectDetail?.projectAdmin,
    description: projectDetail?.description,
    testExecutionTime: projectDetail?.testExecutionTime
  };

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <ProjectTitle />
      <ProjectInfo {...projectBasicInfo} />
      <span className="border border-typography-gray my-4"></span>

      <section className="flex gap-6 justify-center py-4 children:shadow-custom children:rounded-15 children:w-full">
        <ProjectSummaryGraph testSummary={projectDetail?.testSummary} />
        <ProjectPageTable pages={projectDetail?.pages || []} />
      </section>

      <ReportBrief reportSummary={projectDetail?.reportSummary} projectId={Number(projectId)} />

      <DesignSourceSection
        figmaUrl={projectDetail?.figmaUrl}
        serviceUrl={projectDetail?.serviceUrl}
        rootFigmaPage={projectDetail?.rootFigmaPage}
        containerClassName="border-none shadow-custom rounded-15 px-6 pt-6 pb-8 space-y-4"
        disabled
      />

      <ProjectControlButtons projectId={Number(projectId)} projectName={projectBasicInfo.projectName} />
    </div>
  );
}
