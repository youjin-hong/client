import Layout from '@/components/layout/page-layout/Layout';
import { ROUTES } from '@/constants';
import LoginPage from '@/pages/auth/LoginPage';
import SignupPage from '@/pages/auth/SignupPage';
import LandingPage from '@/pages/main/LandingPage';
import ManualPage from '@/pages/manual/ManualPage';

// 로그인 없이 접근 가능한 라우팅 모음
const PublicRoutes = [
  {
    element: <Layout />, // 페이지 공통 layout 추가
    children: [
      { path: ROUTES.LANDING, element: <LandingPage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      { path: ROUTES.MANUAL, element: <ManualPage /> }
    ]
  }
];

export default PublicRoutes;
