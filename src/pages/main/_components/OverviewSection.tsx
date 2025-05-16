import React from 'react';
import OverviewCard from './OverviewCard';
import ProjectIcon from '@/assets/icons/dash-project.svg?react';
import TestIcon from '@/assets/icons/dash-projecting.svg?react';
import IncompleteIcon from '@/assets/icons/dash-test.svg?react';

const overviewData = [
  {
    icon: <ProjectIcon width={40} height={40} />,
    title: '진행 중인 프로젝트 수',
    value: 12,
    unit: '개'
  },
  {
    icon: <TestIcon width={40} height={40} />,
    title: '진행 중인 테스트 수',
    value: 1208,
    unit: '개'
  },
  {
    icon: <IncompleteIcon width={40} height={40} />,
    title: '미완료된 테스트 수',
    value: 95,
    unit: '개'
  }
];

const OverviewSection: React.FC = () => (
  <section className="w-full px-2 md:px-0 mb-8">
    <div className="font-bold text-[18px] text-[#222] mb-6 md:mb-8">Overview</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {overviewData.map((item) => (
        <OverviewCard key={item.title} {...item} />
      ))}
    </div>
  </section>
);

export default OverviewSection;
