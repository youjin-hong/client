import Button from '@/components/ui/button/Button';
import { ROUTES } from '@/constants';
import { Link } from 'react-router-dom';
import bigLogo from '@/assets/logos/AUTA_big.svg';
import noProfileImg from '@/assets/images/no-profile.png';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-row w-full h-screen items-center justify-center px-[8vw]">
        {/* 좌측: 로고+텍스트 */}
        <div className="flex flex-col justify-center flex-1 max-w-[600px]">
          <img src={bigLogo} alt="AUTA 로고" className="h-28 w-auto mb-8" />
          <h1 className="text-4xl font-extrabold mb-6">AUTA No-Code 테스트</h1>
          <div className="text-base mb-8 leading-relaxed">
            핵심 소개글입니다. 핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.
            <br />
            핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.
            <br />
            핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.
            <br />
            핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.핵심 소개글입니다.
          </div>
          <div className="flex gap-4">
            <Link to={ROUTES.LOGIN}>
              <Button text="로그인 후 무료로 시작하기" />
            </Link>
            <Link to={ROUTES.MANUAL}>
              <Button text="AUTA 사용법" />
            </Link>
          </div>
        </div>
        {/* 우측: 이미지 */}
        <div className="flex flex-1 items-center justify-center">
          <div className="bg-gray-200 rounded-xl overflow-hidden w-[400px] h-[320px] flex items-center justify-center">
            <img src={noProfileImg} alt="AUTA 소개 이미지" className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
