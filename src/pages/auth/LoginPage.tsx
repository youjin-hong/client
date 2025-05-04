import AuthForm from '@/pages/auth/_components/AuthForm';

export default function LoginPage() {
  // TODO: 로그인 기능 구현
  const handleLogin = () => {
    console.log('로그인');
  };
  return (
    <>
      <AuthForm type="login" onSubmit={handleLogin} />
    </>
  );
}
