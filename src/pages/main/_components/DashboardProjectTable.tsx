import React from 'react';
import TableItem from '@/components/ui/table/CustomTable';
import StatusBadge from '@/pages/project/_components/StatusBadge';
import { ProjectListData } from '@/types/project.type';

const columns = [
  { id: 'projectName', label: '프로젝트 명' },
  { id: 'projectAdmin', label: '프로젝트 관리자' },
  { id: 'projectEnd', label: '마감일' },
  { id: 'projectStatus', label: '진행 상태' }
];

interface DashboardProjectTableProps {
  projects: ProjectListData[];
}

const DashboardProjectTable: React.FC<DashboardProjectTableProps> = ({ projects }) => (
  <TableItem<ProjectListData>
    columns={columns}
    items={projects}
    renderCell={(column, item) => {
      if (column.id === 'projectStatus') {
        return <StatusBadge status={item.projectStatus} />;
      }
      return item[column.id as keyof ProjectListData] ?? '-';
    }}
  />
);

export default DashboardProjectTable;
