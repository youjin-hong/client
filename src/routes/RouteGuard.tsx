import { Navigate, Outlet } from 'react-router-dom';

// 인증 라우팅 보호용 컴포넌트
export default function RouteGuard() {
  // const token = getToken(); // TODO: store나 utils에서 token을 local(혹은 session)Storage에서 가져오는 함수 import
  const token = 'TOKEN'; // 임시용

  return token ? <Outlet /> : <Navigate to="/login" />;
}
