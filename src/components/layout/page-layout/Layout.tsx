import Footer from '@/components/layout/page-layout/Footer';
import Header from '@/components/layout/page-layout/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      {/* TODO: 헤더나 네비게이션 필요하다면 여기에 추가하기 */}
      <Header />
      <main className="px-4 py-4 md:px-8 md:py-6 lg:pt-[167px] lg:pr-[69px] lg:pb-[53px] lg:pl-[329px] mx-auto">
        <div className="container mx-auto px-4 md:px-8 lg:px-0">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
