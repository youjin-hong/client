import DesignSourceSection from '@/pages/project/_components/projectForm/DesignSourceSection';
import ProjectTitle from '@/pages/project/_components/ProjectTitle';
import ProjectInfo from '@/pages/project/_components/projectDetail/ProjectInfo';
import ReportBrief from '@/pages/project/_components/projectDetail/ReportBrief';
import ProjectControlButtons from '@/pages/project/_components/projectDetail/ProjectControlButtons';
import ProjectPageTable from '@/pages/project/_components/projectDetail/ProjectPageTable';
import BigLogo from '@/assets/logos/AUTA_big.svg';
import { useGetProjectDetail } from '@/store/queries/project/useProjectQueries';
import { useParams } from 'react-router-dom';

export default function ProjectDetailPage() {
  const projectId = useParams();
  console.log('파람스', projectId);

  const { data: projectDetail } = useGetProjectDetail(Number(projectId));

  console.log('프젝디테일', projectDetail);

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <ProjectTitle />
      <ProjectInfo />

      {/* TODO: 내용 정해지면 페이지 컴포넌트로 뺄 예정 */}
      <section className="flex gap-6 justify-center py-4 children:shadow-custom children:rounded-15 children:w-full">
        <div className="p-6 flex flex-col items-center gap-4">
          <p className="font-medium text-16">개발중... 조금만 기다려주세요</p>
          <img src={BigLogo} alt="임시 이미지" />
        </div>

        <ProjectPageTable />
      </section>

      <ReportBrief />

      <DesignSourceSection
        figmaUrl="gkgkgk"
        serviceUrl="하하하"
        rootFigmaPage="Dashboard"
        containerClassName="border-none shadow-bottom_custom rounded-15 px-6 pt-6 pb-8 space-y-4"
        onChange={() => console.log('하하')}
      />

      <ProjectControlButtons />
    </div>
  );
}
