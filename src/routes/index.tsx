import { Navigate } from 'react-router-dom';
import { ROUTES } from '@/constants';
import Layout from '@/components/layout/page-layout/Layout';
import LandingPage from '@/pages/main/LandingPage';
import LoginPage from '@/pages/auth/LoginPage';
import SignupPage from '@/pages/auth/SignupPage';
import ManualPage from '@/pages/manual/ManualPage';
import ManualPrivatePage from '@/pages/manual/ManualPrivatePage';
import DashboardPage from '@/pages/main/DashboardPage';
import ProjectCreatePage from '@/pages/project/ProjectCreatePage';
import ProjectDetailPage from '@/pages/project/ProjectDetailPage';
import ProjectMangePage from '@/pages/project/ProjectMangePage';
import TestManagePage from '@/pages/test/TestManagePage';
import TestDetailPage from '@/pages/test/TestDetailPage';
import SettingPage from '@/pages/setting/SettingPage';
import ProfileEditPage from '@/pages/setting/ProfileEditPage';
import PasswordEditPage from '@/pages/setting/PasswordEditPage';
import ProjectModifyPage from '@/pages/project/ProjectModifyPage';

const routes = [
  {
    element: <Layout />,
    children: [
      // 공개 라우트
      { path: ROUTES.LANDING, element: <LandingPage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      { path: ROUTES.MANUAL, element: <ManualPage /> },
      { path: '/main/manual', element: <ManualPrivatePage /> },

      // 비공개 라우트 (인증이 필요한 라우트)
      { path: ROUTES.HOME, element: <DashboardPage /> },
      { path: ROUTES.PROJECTS, element: <ProjectMangePage /> },
      { path: ROUTES.NEW_PROJECT, element: <ProjectCreatePage /> },
      { path: ROUTES.PROJECT_DETAIL, element: <ProjectDetailPage /> },
      { path: ROUTES.TESTS, element: <TestManagePage /> },
      { path: ROUTES.TEST_DETAIL, element: <TestDetailPage /> },
      { path: ROUTES.SETTINGS, element: <SettingPage /> },
      { path: ROUTES.PROFILE, element: <ProfileEditPage /> },
      { path: ROUTES.PASSWORD, element: <PasswordEditPage /> },
      { path: ROUTES.EDIT_PROJECT, element: <ProjectModifyPage /> },

      // 404 페이지
      { path: '*', element: <Navigate to={ROUTES.HOME} replace /> }
    ]
  }
];

export default routes;
