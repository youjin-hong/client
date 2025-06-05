import { useParams } from 'react-router-dom';
import { useGetTestDetail } from '@/store/queries/test/useTestQueries';
import ProjectInfo from '@/pages/project/_components/projectDetail/ProjectInfo';
import TestTitle from '@/pages/test/_components/TestTitle';
import TestRatingBars from '@/pages/test/_components/testDetail/TestRatingBars';
import PageIssueSection from '@/pages/test/_components/testDetail/page-issue';

export default function TestDetailPage() {
  const params = useParams();
  const projectId = params.projectId;
  const { data: testDetail, isPending, isError } = useGetTestDetail(Number(projectId));

  if (isPending) return <div className="py-20 text-center">로딩 중...</div>;
  if (isError) return <div className="py-20 text-center text-red-500">오류가 발생했습니다.</div>;

  const testBasicInfo = {
    projectName: testDetail?.projectName,
    projectCreatedDate: testDetail?.projectCreatedDate,
    projectEnd: testDetail?.projectEnd,
    projectAdmin: testDetail?.projectAdmin,
    description: testDetail?.description,
    testExecutionTime: testDetail?.testExecutionTime
  };

  return (
    <div className="w-[90%] m-auto">
      <TestTitle />
      <hr className="w-full border-t-[1.5px] border-typography-gray my-2" />
      <div className="px-3 pt-2 pb-11">
        <ProjectInfo {...testBasicInfo} />
      </div>

      <TestRatingBars testSummary={testDetail.testSummary} />

      <section>
        <PageIssueSection testDetail={testDetail} />
      </section>
    </div>
  );
}
