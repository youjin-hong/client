import React from 'react';
import TableItem from '@/components/ui/table/CustomTable';
import { DashBoardTestList } from '@/types/test.type';

const columns = [
  { id: 'projectName', label: '프로젝트 명' },
  { id: 'testType', label: '테스트 유형' },
  { id: 'testStatus', label: '성공 여부' },
  { id: 'pageName', label: '페이지 명' }
];

const typeColor: Record<string, string> = {
  Routing: 'text-green-600',
  Interaction: 'text-purple-600',
  Component: 'text-yellow-600'
};

const DashboardTestTable: React.FC<{ tests: DashBoardTestList[] }> = ({ tests }) => (
  <TableItem
    columns={columns}
    items={tests}
    renderCell={(column, item) => {
      if (column.id === 'testStatus') {
        return (
          <span className={`font-bold ${typeColor[item.testType as keyof typeof typeColor]}`}>{item.testType}</span>
        );
      }
      if (column.id === 'testStatus') {
        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${item.testStatus === '성공' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {item.testStatus}
          </span>
        );
      }
      return item[column.id as keyof DashBoardTestList] ?? '-';
    }}
  />
);

export default DashboardTestTable;
