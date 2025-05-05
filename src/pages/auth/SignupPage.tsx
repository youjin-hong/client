import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants';
import AuthForm from '@/pages/auth/_components/AuthForm';
import { useSignup } from '@/store/queries/auth/useAuthMutations';
import { LoginRequest, SignupRequest } from '@/types/user.type';

export default function SignupPage() {
  const navigate = useNavigate();
  const signupRequest = useSignup();

  const handleSubmit = (data: LoginRequest | SignupRequest) => {
    // signupRequest 타입인지 (username이 있는지) 확인
    if ('username' in data) {
      signupRequest.mutate(data, {
        onSuccess: () => {
          // TODO: alert창 컴포넌트 만들어서 나중에 바꾸기 (eg. "회원가입이 완료되었습니다.")
          alert('회원가입이 완료되었습니다.');
          navigate(ROUTES.LOGIN);
          console.log('회원가입 완료');
        }
      });
    }
  };

  return (
    <>
      <AuthForm type="signup" onSubmit={handleSubmit} />
    </>
  );
}
