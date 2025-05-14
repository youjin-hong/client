import DesignSourceSection from '@/pages/project/_components/projectForm/DesignSourceSection';
import ProjectTitle from '@/pages/project/_components/ProjectTitle';
import ProjectInfo from '@/pages/project/_components/projectDetail/ProjectInfo';
import ReportBrief from '@/pages/project/_components/projectDetail/ReportBrief';
import ProjectControlButtons from '@/pages/project/_components/projectDetail/ProjectControlButtons';

export default function ProjectDetailPage() {
  return (
    <div className="w-[90%] flex flex-col m-auto">
      <ProjectTitle />
      <ProjectInfo />

      <section className="flex gap-6 justify-center py-4 children:shadow-custom children:rounded-15 children:w-full">
        <div className="">그래프 섹션</div>
        <div className="p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-14 text-typography-dark font-bold border-b border-b-[#CCCCCC]">
                <th className="px-4 py-2">페이지명</th>
                <th className="px-4 py-2">페이지 URL</th>
                <th className="px-4 py-2">피그마 URL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="children:font-medium text-11 text-typography-dark">
                <td className="px-4 py-2">페이지이름</td>
                <td className="px-4 py-2">
                  <p>페이지유알엑</p>
                </td>
                <td className="px-4 py-2">
                  <p>피그마유알엑</p>
                </td>
              </tr>
              <tr className="children:font-medium text-11 text-typography-dark">
                <td className="px-4 py-2">페이지이름</td>
                <td className="px-4 py-2">
                  <p>페이지유알엑</p>
                </td>
                <td className="px-4 py-2">
                  <p>피그마유알엑</p>
                </td>
              </tr>
              <tr className="children:font-medium text-11 text-typography-dark">
                <td className="px-4 py-2">페이지이름</td>
                <td className="px-4 py-2">
                  <p>페이지유알엑</p>
                </td>
                <td className="px-4 py-2">
                  <p>피그마유알엑</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
