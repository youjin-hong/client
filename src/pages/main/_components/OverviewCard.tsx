import React from 'react';

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  unit?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ icon, title, value, unit }) => (
  <div
    className="flex flex-col items-center md:items-start justify-between
               w-full max-w-[90vw] sm:max-w-[322px] min-w-[180px] h-[200px] md:h-[219px]
               px-6 md:px-[32px] py-6 md:py-[24px]
               rounded-[20px] bg-[#F5F5F5]
               shadow-[0_0_4px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
    {/* 아이콘 영역 */}
    <div className="mb-0 flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#D5B8D5]">{icon}</div>

    {/* 타이틀 */}
    <div className="text-[12px] md:text-[16px] font-bold text-[#191919]">{title}</div>

    {/* 값 + 단위 */}
    <div className="flex items-end">
      <span className="text-[40px] md:text-[48px] font-extrabold text-[#191919] leading-none">{value}</span>
      {unit && <span className="text-[14px] md:text-[18px] font-bold ml-1 text-[#191919]">{unit}</span>}
    </div>
  </div>
);

export default OverviewCard;
