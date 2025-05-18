import React from 'react';
import TableItem from '@/components/ui/table/CustomTable';

const columns = [
  { id: 'name', label: '프로젝트 명' },
  { id: 'type', label: '테스트 유형' },
  { id: 'result', label: '성공 여부' },
  { id: 'page', label: '페이지 명' }
];

const typeColor: Record<string, string> = {
  Routing: 'text-green-600',
  Interaction: 'text-purple-600',
  Component: 'text-yellow-600'
};

const DashboardTestTable: React.FC<{ tests: any[] }> = ({ tests }) => (
  <TableItem
    columns={columns}
    items={tests}
    renderCell={(column, item) => {
      if (column.id === 'type') {
        return <span className={`font-bold ${typeColor[item.type as keyof typeof typeColor]}`}>{item.type}</span>;
      }
      if (column.id === 'result') {
        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${item.result === '성공' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {item.result}
          </span>
        );
      }
      return item[column.id] ?? '-';
    }}
  />
);

export default DashboardTestTable;
