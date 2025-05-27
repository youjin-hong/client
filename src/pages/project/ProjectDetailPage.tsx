import { useParams } from 'react-router-dom';
import { useGetProjectDetail } from '@/store/queries/project/useProjectQueries';
import DesignSourceSection from '@/pages/project/_components/projectForm/DesignSourceSection';
import ProjectTitle from '@/pages/project/_components/ProjectTitle';
import ProjectInfo from '@/pages/project/_components/projectDetail/ProjectInfo';
import ReportBrief from '@/pages/project/_components/projectDetail/ReportBrief';
import ProjectControlButtons from '@/pages/project/_components/projectDetail/ProjectControlButtons';
import ProjectPageTable from '@/pages/project/_components/projectDetail/ProjectPageTable';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId;
  const { data: projectDetail } = useGetProjectDetail(Number(projectId));

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

      {/* TODO: 내용 정해지면 페이지 컴포넌트로 뺄 예정 */}
      <section className="flex gap-6 justify-center py-4 children:shadow-custom children:rounded-15 children:w-full">
        <div className="p-6 flex flex-col items-center h-full">
          <div className="border border-dashed border-typography-gray p-4 rounded-md w-full min-h-[200px] h-full flex justify-center items-center">
            <p className="font-medium text-16 text-typography-gray">개발중... 조금만 기다려주세요</p>
          </div>
        </div>

        <ProjectPageTable pages={projectDetail?.pages || []} />
      </section>

      <ReportBrief reportSummary={projectDetail?.reportSummary} />

      <DesignSourceSection
        figmaUrl={projectDetail?.figmaUrl}
        serviceUrl={projectDetail?.serviceUrl}
        rootFigmaPage={projectDetail?.rootFigmaPage}
        containerClassName="border-none shadow-custom rounded-15 px-6 pt-6 pb-8 space-y-4"
        onChange={() => console.log('하하')}
        disabled
      />

      <ProjectControlButtons projectId={Number(projectId)} />
    </div>
  );
}
