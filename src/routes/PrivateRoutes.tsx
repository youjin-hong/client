import { ROUTES } from '@/constants';
import RouteGuard from '@/routes/RouteGuard';
import Layout from '@/components/layout/Layout';
import { DashboardPage } from '@/pages/main/DashboardPage';
import ProjectMangePage from '@/pages/project/ProjectMangePage';
import ProjectCreatePage from '@/pages/project/ProjectCreatePage';
import ProjectDetailPage from '@/pages/project/ProjectDetailPage';
import TestDetailPage from '@/pages/test/TestDetailPage';
import TestManagePage from '@/pages/test/TestManagePage';
import ProfileEditPage from '@/pages/setting/ProfileEditPage';
import SettingPage from '@/pages/setting/SettingPage';

// 로그인 인증이 필요한 라우팅 모음
const PrivateRoutes = [
  {
    element: <RouteGuard />, // 인증 확인 컴포넌트
    children: [
      {
        element: <Layout />,
        children: [
          { path: ROUTES.HOME, element: <DashboardPage /> },
          { path: ROUTES.PROJECTS, element: <ProjectMangePage /> },
          { path: ROUTES.NEW_PROJECT, element: <ProjectCreatePage /> },
          { path: ROUTES.PROJECT_DETAIL, element: <ProjectDetailPage /> },
          { path: ROUTES.TESTS, element: <TestManagePage /> },
          { path: ROUTES.TEST_DETAIL, element: <TestDetailPage /> },
          { path: ROUTES.SETTINGS, element: <SettingPage /> },
          { path: ROUTES.PROFILE, element: <ProfileEditPage /> }
        ]
      }
    ]
  }
];

export default PrivateRoutes;
