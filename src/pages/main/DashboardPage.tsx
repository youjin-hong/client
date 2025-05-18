import OverviewSection from './_components/OverviewSection';
import DashboardProjectTable from './_components/DashboardProjectTable';
import DashboardTestTable from './_components/DashboardTestTable';

const mockProjects = [
  {
    projectId: 1,
    projectName: 'AI기반 스마트 UI테스트 자동화 서비스',
    projectAdmin: 'Hyznn',
    projectEnd: 'Oct 3, 2025',
    projectCreatedDate: '2023-01-01',
    projectStatus: 'COMPLETED' as 'COMPLETED',
    testRate: 100
  },
  {
    projectId: 2,
    projectName: 'AI기반 스마트 UI테스트 자동화 서비스',
    projectAdmin: 'Hyznn',
    projectEnd: 'Oct 3, 2025',
    projectCreatedDate: '2023-01-01',
    projectStatus: 'IN_PROGRESS' as 'IN_PROGRESS',
    testRate: 80
  },
  {
    projectId: 3,
    projectName: 'AI기반 스마트 UI테스트 자동화 서비스',
    projectAdmin: 'Hyznn',
    projectEnd: 'Oct 3, 2025',
    projectCreatedDate: '2023-01-01',
    projectStatus: 'COMPLETED' as 'COMPLETED',
    testRate: 100
  }
];

const mockTests = [
  { name: 'AI기반 스마트 UI테스트 자동화 서비스', type: 'Routing', result: '성공', page: 'DashBoard' },
  { name: 'AI기반 스마트 UI테스트 자동화 서비스', type: 'Routing', result: '실패', page: 'DashBoard' },
  { name: 'AI기반 스마트 UI테스트 자동화 서비스', type: 'Interaction', result: '실패', page: 'DashBoard' },
  { name: 'AI기반 스마트 UI테스트 자동화 서비스', type: 'Component', result: '성공', page: 'DashBoard' }
];

export default function DashboardPage() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-0">
      <div className="w-full max-w-none mx-auto px-8">
        <OverviewSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <div className="text-[22px] font-extrabold text-[#222] mb-6">프로젝트 관리</div>
            <DashboardProjectTable projects={mockProjects} />
          </section>
          <section>
            <div className="text-[22px] font-extrabold text-[#222] mb-6">테스트 관리</div>
            <DashboardTestTable tests={mockTests} />
          </section>
        </div>
      </div>
    </div>
  );
}
