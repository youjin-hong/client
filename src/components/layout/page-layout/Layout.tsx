import Footer from '@/components/layout/page-layout/Footer';
import Header from '@/components/layout/page-layout/Header';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col w-full ml-[280px]">
        <div className="px-24 w-full">
          <Header />
          <main className="flex-grow py-8">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
