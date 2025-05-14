import bigLogo from '@/assets/logos/AUTA_big.svg';

const ManualContent = ({ showLogo = false }: { showLogo?: boolean }) => (
  <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
    {showLogo && (
      <div className="w-full flex items-center justify-center mt-12 mb-16">
        <img src={bigLogo} alt="AUTA 로고" className="h-20 w-auto" />
      </div>
    )}
    <h1 className="text-3xl font-extrabold mb-6 text-center">AUTA 사용법 안내</h1>
    <div className="text-base mb-8 leading-relaxed text-center">
      <p>1. AUTA의 주요 기능, 사용법, 예시 등을 아래에서 확인하세요.</p>
      <p>2. 더 자세한 내용은 로그인 후 대시보드에서 확인할 수 있습니다.</p>
    </div>
    <div className="w-full bg-gray-100 rounded-xl p-8 shadow">
      <h2 className="text-xl font-bold mb-4">예시 매뉴얼 섹션</h2>
      <ul className="list-disc pl-5 text-left">
        <li>프로젝트 생성 방법</li>
        <li>테스트 케이스 작성법</li>
        <li>피그마 연동 방법</li>
        <li>결과 리포트 확인</li>
      </ul>
    </div>
  </div>
);

export default ManualContent;
