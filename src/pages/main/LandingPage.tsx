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
            🎯 디자인 그대로, 자동으로 테스트하다
            <br />
            <br />
            AUTA는 Figma 디자인만 있으면, 별도의 코드 작성 없이 실제 서비스 화면과 일치하는지를 자동으로 검증할 수 있는
            No-Code UI 테스트 플랫폼입니다.
            <br />
            Figma 디자인과 실제 구현 화면 간의 컴포넌트 정합성을 자동으로 비교하고, 페이지 간 이동 흐름과 라우팅
            정확성까지 검증합니다. 클릭, hover와 같은 인터랙션이 의도대로 작동하는지도 확인할 수 있으며, 테스트 결과는
            리포트 형태로 시각화되어 누구나 쉽게 문제를 파악하고 개선할 수 있도록 도와줍니다.
            <br />
            <br />
            이제 코드 없이, 누구나 정확한 UI 테스트를 경험해보세요. AUTA가 디자인과 개발의 간극을 줄입니다.
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
