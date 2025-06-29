import { useState, useEffect } from 'react';
import bigLogo from '@/assets/logos/AUTA_big.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button/Button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

// Import manual images
import manual1 from '@/assets/images/manual1.png';
import manual2 from '@/assets/images/manual2.png';
import manual3 from '@/assets/images/manual3.png';
import manual4 from '@/assets/images/manual4.png';
import manual5 from '@/assets/images/manual5.png';
import manual6 from '@/assets/images/manual6.png';

const slides = [
  {
    id: 1,
    title: '로그인 후 무료 시작하기',
    text: '① 웹사이트에 접속하여 "로그인 후 무료 시작하기" 버튼을 클릭합니다.<br/>② 계정이 없다면 회원가입을, 있다면 바로 로그인 해주세요.',
    imageSrc: manual1
  },
  {
    id: 2,
    title: '새 프로젝트 생성 접근',
    text: '① 메인 화면에서 "새 프로젝트 생성" 버튼을 클릭하여 프로젝트 생성 페이지로 이동합니다.<br/>② 프로젝트 정보를 기입해주세요.<br/>③ 피그마 시안 파일, 배포 서비스 URL, 피그마 루트 페이지를 기입한 후 등록/등록 후 테스트 생성하기 버튼을 클릭해주세요.',
    imageSrc: manual2
  },
  {
    id: 3,
    title: '프로젝트 관리 확인',
    text: '① 사이드바에서 "프로젝트 관리"를 클릭하여 등록한 프로젝트 리스트를 확인합니다.<br/>② 보고싶은 프로젝트를 선택합니다.',
    imageSrc: manual3
  },
  {
    id: 4,
    title: '프로젝트 세부 정보 및 테스트 리포트 보기',
    text: '① 선택한 프로젝트의 세부 정보를 확인하고 우측 상단의 "테스트 실행하기"를 클릭하여 테스트를 시작합니다.<br/>② 테스트 완료 후 "테스트 리포트 바로가기" 버튼을 클릭하여 결과를 확인합니다.',
    imageSrc: manual4
  },
  {
    id: 5,
    title: '테스트 관리 확인',
    text: '① 사이드바에서 "테스트 관리"를 클릭하여 테스트 관리 리스트를 확인합니다.<br/>② 보고싶은 테스트의 "보기" 버튼을 클릭합니다.',
    imageSrc: manual5
  },
  {
    id: 6,
    title: '대시보드 확인',
    text: '① 진행 중인 프로젝트 및 테스트 현황을 "DASHBOARD"에서 한눈에 확인할 수 있습니다.<br/>② 궁금하신 사항은 카카오톡 오픈채팅방을 이용해주세요!',
    imageSrc: manual6
  }
];

const faqsWithAnswers = [
  {
    question: 'AUTA는 무엇인가요?',
    answer:
      'AUTA는 Figma 디자인만 있으면, 별도의 코드 작성 없이 실제 서비스 화면과 일치하는지를 자동으로 검증할 수 있는 No-Code UI 테스트 플랫폼입니다.'
  },
  {
    question: '회원가입은 어떻게 하나요?',
    answer: '회원가입은 웹사이트에서 "로그인 후 무료로 시작하기" 버튼을 누른 후, 회원가입 절차를 따르면 됩니다.'
  },
  {
    question: '테스트는 어떻게 생성하나요?',
    answer: '새 프로젝트 생성 버튼을 클릭하고 필요한 정보를 입력하여 프로젝트를 생성한 후 테스트를 실행할 수 있습니다.'
  },
  {
    question: '피그마 연동이 안될 때는?',
    answer: '피그마 연동 시 문제가 발생하면, 관련 설정 및 가이드를 확인하거나 고객 지원팀에 문의해주세요.'
  },
  {
    question: '결과 리포트는 어디서 확인하나요?',
    answer: '테스트 실행 후 프로젝트 관리 페이지에서 해당 프로젝트의 상세 리포트를 확인할 수 있습니다.'
  }
];

const ManualContent = ({ showLogo = false }: { showLogo?: boolean }) => {
  const [current, setCurrent] = useState(0);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices((prevIndices) =>
      prevIndices.includes(index) ? prevIndices.filter((i) => i !== index) : [...prevIndices, index]
    );
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
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
      <div className="flex flex-col items-center w-full mb-8">
        {/* 캐러셀 본문 (화살표 포함) */}
        <div className="flex items-center justify-center w-full relative">
          {/* 왼쪽 화살표 */}
          <button onClick={prevSlide} className="text-5xl font-bold px-8 select-none focus:outline-none z-10">
            <div className="w-0 h-0 border-t-[20px] max-sm:border-t-[12px] border-t-transparent border-b-[20px] max-sm:border-b-[12px] border-b-transparent border-r-[30px] max-sm:border-r-[18px] border-r-[#97AF8F]"></div>
          </button>
          {/* 슬라이드 콘텐츠 랩퍼 - overflow-hidden 및 애니메이션 적용 */}
          <div className="w-full max-w-[1000px] min-h-[372px] max-lg:min-h-[600px] max-md:min-h-[500px] rounded-xl bg-[#F5F5F5] shadow-md overflow-hidden relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full p-8 max-lg:p-4 flex max-lg:flex-col items-center justify-between flex-shrink-0 transition-transform duration-500 ease-in-out ${
                  index === current ? 'translate-x-0' : index < current ? '-translate-x-full' : 'translate-x-full'
                }`}
                style={{ zIndex: index === current ? 1 : 0 }}>
                {/* 이미지 Placeholder */}
                <div className="w-[430px] max-lg:w-full h-[calc(100%-25%)] max-lg:h-[250px] max-md:h-[200px] flex-shrink-0 max-lg:mb-4">
                  {/* Container for image */}
                  <img
                    src={slide.imageSrc}
                    alt={`Manual step ${slide.id}`}
                    className="w-full h-full object-contain rounded-lg border border-gray-300"
                  />
                </div>
                {/* 텍스트 내용 */}
                <div
                  className="flex flex-col items-start ml-8 max-lg:ml-0 flex-grow relative overflow-y-auto"
                  style={{ gap: '15px' }}>
                  <h3 className="text-xl max-lg:text-lg font-bold text-typography-dark">{slide.title}</h3>
                  <p
                    className="text-sm max-lg:text-xs leading-relaxed text-typography-dark"
                    style={{ lineHeight: '1.9' }}
                    dangerouslySetInnerHTML={{ __html: slide.text }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* 오른쪽 화살표 */}
          <button onClick={nextSlide} className="text-5xl font-bold px-8 select-none focus:outline-none z-10">
            <div className="w-0 h-0 border-t-[20px] max-sm:border-t-[12px] border-t-transparent border-b-[20px] max-sm:border-b-[12px] border-b-transparent border-l-[30px] max-sm:border-l-[18px] border-l-[#97AF8F]"></div>
          </button>
        </div>
        {/* 페이지네이션 불렛 */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === current ? 'bg-pointColor' : 'bg-gray-400'}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* FAQ 영역 */}
      <div className="w-full max-w-xl mt-8">
        <h2 className="font-bold mb-4">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqsWithAnswers.map((item, idx) => {
            const isOpen = openFaqIndices.includes(idx);
            return (
              <div key={idx} className="bg-gray-200 rounded cursor-pointer overflow-hidden">
                <div
                  className="h-12 px-4 flex items-center justify-between text-sm font-medium text-gray-700"
                  onClick={() => toggleFaq(idx)}>
                  <span>{item.question}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4 text-sm text-gray-600">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManualContent;
