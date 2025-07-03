import ProjectPageTable from '@/pages/project/_components/projectDetail/ProjectPageTable';
import ProjectSummaryGraph from '@/pages/project/_components/projectDetail/ProjectSummaryGraph';
import { ProjectDetailData } from '@/types/project.type';

interface CompleteStateProps {
  projectDetail: ProjectDetailData;
}
export default function CompletedState({ projectDetail }: CompleteStateProps) {
  return (
    <div>
      {projectDetail.testSummary && <ProjectSummaryGraph testSummary={projectDetail.testSummary} />}
      <ProjectPageTable pages={projectDetail?.pages || []} />
    </div>
  );
}
