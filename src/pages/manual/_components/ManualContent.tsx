import { useState } from 'react';
import bigLogo from '@/assets/logos/AUTA_big.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button/Button';

const slides = [
  { id: 1, content: 'AUTA 소개 및 주요 기능 안내' },
  { id: 2, content: '프로젝트 생성 방법' },
  { id: 3, content: '테스트 케이스 작성법' },
  { id: 4, content: '피그마 연동 방법' },
  { id: 5, content: '결과 리포트 확인' }
];

const faqs = [
  'AUTA는 무엇인가요?',
  '회원가입은 어떻게 하나요?',
  '테스트는 어떻게 생성하나요?',
  '피그마 연동이 안될 때는?',
  '결과 리포트는 어디서 확인하나요?'
];

const ManualContent = ({ showLogo = false }: { showLogo?: boolean }) => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {showLogo && (
        <>
          <div className="w-full flex items-center justify-center mt-12 mb-10">
            <img src={bigLogo} alt="AUTA 로고" className="h-20 w-auto" />
          </div>
          <div className="flex gap-4 mb-8">
            <Button text="뒤로가기" onClick={() => navigate('/landing')} />
            <Button
              text="로그인하기"
              onClick={() => navigate('/login')}
              className="bg-blue-500 text-black hover:bg-blue-600"
            />
          </div>
        </>
      )}
      {/* 슬라이드(캐러셀) 영역 */}
      <div className="flex items-center justify-center w-full mb-12">
        <button onClick={prevSlide} className="text-5xl font-bold px-8 select-none">
          {'<'}
        </button>
        <div className="border-4 border-blue-400 bg-gray-200 w-[600px] h-[320px] flex items-center justify-center text-2xl font-bold mx-8 rounded">
          {slides[current].content}
        </div>
        <button onClick={nextSlide} className="text-5xl font-bold px-8 select-none">
          {'>'}
        </button>
      </div>
      {/* FAQ 영역 */}
      <div className="w-full max-w-xl mt-8">
        <h2 className="font-bold mb-4">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="h-8 bg-gray-200 rounded flex items-center pl-4 text-sm font-medium text-gray-700">
              {faq}
            </div>
          ))}
        </div>
        <div className="h-8 bg-gray-200 rounded mt-8" />
      </div>
    </div>
  );
};

export default ManualContent;
