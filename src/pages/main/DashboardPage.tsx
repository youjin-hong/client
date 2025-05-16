import OverviewSection from './_components/OverviewSection';
import ProjectMangePage from '@/pages/project/ProjectMangePage';
import TestManagePage from '@/pages/test/TestManagePage';

export default function DashboardPage() {
  return (
    <div className="bg-[#F7F7F8] min-h-screen p-8">
      <OverviewSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <ProjectMangePage />
        </section>
        <section>
          <TestManagePage />
        </section>
      </div>
    </div>
  );
}
