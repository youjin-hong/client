import React from 'react';
import TableItem from '@/components/ui/table/CustomTable';
import { DashBoardTestList } from '@/types/test.type';
import StatusBadge from '@/pages/test/_components/StatusBadge';
import { colors } from '@/styles/theme/colors';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants';

const columns = [
  { id: 'projectName', label: '프로젝트 명' },
  { id: 'testType', label: '테스트 유형' },
  { id: 'testStatus', label: '성공 여부' },
  { id: 'pageName', label: '페이지 명' }
];

const DashboardTestTable: React.FC<{ tests: DashBoardTestList[] }> = ({ tests }) => {
  const navigate = useNavigate();

  const handleDashboardTestItem = (item: DashBoardTestList) => {
    navigate(ROUTES.TEST_DETAIL.replace(':projectId', item.projectId.toString()));
  };

  return (
    <TableItem
      columns={columns}
      items={tests}
      onItemClick={handleDashboardTestItem}
      renderCell={(column, item) => {
        if (column.id === 'testType') {
          const typeKey = String(item.testType).toUpperCase() as keyof typeof colors.TEST_TYPE_TEXT;
          return (
            <span className={`flex items-center font-bold`} style={{ color: colors.TEST_TYPE_TEXT[typeKey] }}>
              <span
                className={`w-3 h-3 rounded-sm mr-2`}
                style={{ backgroundColor: colors.TEST_TYPE_DOT[typeKey] }}></span>
              {item.testType}
            </span>
          );
        }
        if (column.id === 'testStatus') {
          return <StatusBadge status={item.testStatus} />;
        }
        return item[column.id as keyof DashBoardTestList] ?? '-';
      }}
    />
  );
};

export default DashboardTestTable;
