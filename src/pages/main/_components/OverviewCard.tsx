import React from 'react';

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  unit?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ icon, title, value, unit }) => (
  <div className="flex flex-col items-center justify-center bg-white border border-[#E3E0E5] rounded-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] px-6 py-8 min-h-[180px] md:min-h-[220px] transition hover:shadow-md w-full">
    <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#D6C7DE]">{icon}</div>
    <div className="text-[15px] md:text-[16px] font-bold text-[#222] mb-2 text-center leading-tight">{title}</div>
    <div className="text-[36px] md:text-[40px] font-extrabold text-[#191919] flex items-end">
      {value}
      {unit && <span className="text-[18px] md:text-[22px] font-bold ml-1 text-[#191919]">{unit}</span>}
    </div>
  </div>
);

export default OverviewCard;
