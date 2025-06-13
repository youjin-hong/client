import { Suspense } from 'react';
import Button from '@/components/ui/button/Button';
import { ROUTES } from '@/constants';
import { Link } from 'react-router-dom';
import bigLogo from '@/assets/logos/AUTA_big.svg';
import Footer from '@/components/layout/page-layout/Footer';
import CheckeredBackground from '@/components/CheckPatternBackground';

// lazy loading을 드디어 해보다니
/**
 * 나중에 블로그로 정리해야지
 * lazy loading이란? 간단하게 말하면 페이지를 불러온느 시점에 당장 필요하지 않은 리소스들을 추후에 로딩하게 하는 기술이다.
 * 우선 코드를 수정하는 이유는...
 * 랜딩 페이지여서 뒷배경이랑 유튭 영상이 다이긴 하지만 지금 애니메이션에서 거의 100개 가량의 filter랑 rect가 쓰이고 있..(나의 삽질..)고,
 * 유튭 영상이 페이지 로드되자마자 바로 스트리밍이 시작되고 있고, 또 불필요한 리렌더링이 일어나고 있는 듯하다.
 * 다른 페이지였으면 그냥 넓은 마음으로 넘어갈 수 있지만 랜딩 페이지에서부터 버벅이면 너무 들어가기 싫을 것 같아서 문제를 해결해보고자 합니다.
 */
// const AnimatedBackground = lazy(() => import('@/components/AnimatedBackground'));

const LandingPage = () => {
  return (
    <>
      <div className="relative w-full h-full min-h-screen flex flex-col">
        {/* 애니메이션 배경을 lazy loading으로 처리 */}
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />}>
          {/* <AnimatedBackground /> */}
          <CheckeredBackground />
        </Suspense>

        <div className="z-10 grid grid-cols-2 w-full h-screen items-center justify-center px-[8vw]">
          <div className="flex flex-col justify-center flex-1 max-w-[600px] p-12 rounded-[50px] bg-[#F0FEED]/50">
            <img
              src={bigLogo}
              alt="AUTA 로고"
              className="w-48 mb-8"
              loading="eager" // 로고는 즉시 로드
            />
            <h1 className="text-4xl font-extrabold mb-6">AUTA No-Code 테스트</h1>
            <div className="text-16 mb-8 leading-relaxed font-semibold">
              🎯 디자인 그대로, 자동으로 테스트하다
              <br />
              <br />
              AUTA는 Figma 디자인만 있으면, 별도의 코드 작성 없이 실제 서비스 화면과 일치하는지를 자동으로 검증할 수
              있는 No-Code UI 테스트 플랫폼입니다.
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
                <Button text="로그인 후 무료로 시작하기" className="border-[#B3C7AA]" />
              </Link>
              <Link to={ROUTES.MANUAL}>
                <Button text="AUTA 사용법" className="border-[#B3C7AA]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <VideoPlayer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// 비디오 플레이어를 별도 컴포넌트로 분리하여 lazy loading
const VideoPlayer = () => {
  return (
    <div className="bg-[#DDEDD8] rounded-xl overflow-hidden w-full h-full flex items-center justify-center">
      <iframe
        src="https://www.youtube.com/embed/pZ-hYhXEerU?autoplay=0&mute=1&loop=1&playlist=pZ-hYhXEerU"
        title="AUTA 플러그인 사용법 안내"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full max-w-full max-h-full"
        style={{ aspectRatio: '16/9' }}
        loading="lazy"
      />
    </div>
  );
};
export default LandingPage;
