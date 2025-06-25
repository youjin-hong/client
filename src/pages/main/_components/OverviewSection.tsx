import React from 'react';
import OverviewCard from './OverviewCard';

interface OverviewSectionProps {
  overviewData: Array<{
    icon: React.ReactNode;
    title: string;
    value: number | string;
    unit?: string;
  }>;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ overviewData }) => (
  <section className="w-full px-2 md:px-0 mb-12 min-w-[450px]">
    <div className="flex gap-4 items-center pl-4 pb-5 text-[22px] font-extrabold text-[#222]">Overview</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center md:place-items-stretch">
      {overviewData.map((item) => (
        <OverviewCard key={item.title} {...item} />
      ))}
    </div>
  </section>
);

export default OverviewSection;
