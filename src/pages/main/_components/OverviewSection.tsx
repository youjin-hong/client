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
  <section className="w-full px-2 md:px-0 mb-12">
    <div className="text-[22px] font-extrabold text-[#222] mb-8">Overview</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {overviewData.map((item) => (
        <OverviewCard key={item.title} {...item} />
      ))}
    </div>
  </section>
);

export default OverviewSection;
