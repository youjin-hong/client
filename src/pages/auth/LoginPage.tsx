import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '@/types/user.type';
import AuthForm from '@/pages/auth/_components/AuthForm';
import { useLogin } from '@/store/queries/auth/useAuthMutations';
import { ROUTES } from '@/constants';

export default function LoginPage() {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const handleLogin = (data: LoginRequest) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        console.log('로그인 성공', response);
        // TODO: alert 창 변경 필요
        alert(response.message);
        navigate(ROUTES.HOME);
      },
      onError: (error) => {
        console.error('로그인 실패', error);
        // TODO: alert 변경 필요
        alert(error.message);
      }
    });
  };
  return (
    <>
      <AuthForm type="login" onSubmit={handleLogin} />
    </>
  );
}
