import { ROUTES } from '@/constants';
import PrivateRoutes from '@/routes/PrivateRoutes';
import PublicRoutes from '@/routes/PublicRoutes';
import { Navigate, useRoutes } from 'react-router-dom';

// 전체 라우팅 정의하는 공간
export default function AppRoutes() {
  const element = useRoutes([
    ...PublicRoutes,
    ...PrivateRoutes,

    // 404 페이지 처리
    { path: '*', element: <Navigate to={ROUTES.HOME} replace /> }
  ]);

  return element;
}
