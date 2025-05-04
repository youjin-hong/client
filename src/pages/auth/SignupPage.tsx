import AuthForm from '@/pages/auth/_components/AuthForm';

export default function SignupPage() {
  // TODO: 회원가입 기능 구현
  const handleSignup = () => {
    console.log('회원가입');
  };

  return (
    <>
      <AuthForm type="signup" onSubmit={handleSignup} />
    </>
  );
}
