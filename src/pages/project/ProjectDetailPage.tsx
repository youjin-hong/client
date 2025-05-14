import DesignSourceSection from '@/pages/project/_components/projectForm/DesignSourceSection';
import ProjectTitle from '@/pages/project/_components/ProjectTitle';
import ProjectInfo from '@/pages/project/_components/projectDetail/ProjectInfo';
import ReportBrief from '@/pages/project/_components/projectDetail/ReportBrief';
import ProjectControlButtons from '@/pages/project/_components/projectDetail/ProjectControlButtons';
import ProjectPageTable from '@/pages/project/_components/projectDetail/ProjectPageTable';

export default function ProjectDetailPage() {
  return (
    <div className="w-[90%] flex flex-col m-auto">
      <ProjectTitle />
      <ProjectInfo />

      <section className="flex gap-6 justify-center py-4 children:shadow-custom children:rounded-15 children:w-full">
        <div className="">그래프 섹션</div>
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
