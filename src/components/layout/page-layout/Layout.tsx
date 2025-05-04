import Footer from '@/components/layout/page-layout/Footer';
import Header from '@/components/layout/page-layout/Header';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import { ROUTES } from '@/constants';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  // 사이드바, 헤더가 필요하지 않은 경로 정의
  const noSidebarAndHeaderRoutes = [ROUTES.LANDING, ROUTES.LOGIN, ROUTES.SIGNUP];

  // 현재 경로가 noSidebarAndHeaderRoutes에 있는지 확인
  const shouldHideSidebarAndHeader = noSidebarAndHeaderRoutes.includes(location.pathname);

  return (
    <div className={`min-h-screen bg-background ${shouldHideSidebarAndHeader ? '' : 'flex'}`}>
      {!shouldHideSidebarAndHeader && <Sidebar />}
      <div className={`flex flex-col w-full ${shouldHideSidebarAndHeader ? '' : 'ml-[280px]'}`}>
        <div className={`px-24 w-full`}>
          {!shouldHideSidebarAndHeader && <Header />}
          <main className={`flex-grow py-8`}>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
