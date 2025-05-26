import React from 'react';
import TableItem from '@/components/ui/table/CustomTable';
import StatusBadge from '@/pages/project/_components/StatusBadge';

type StatusType = 'IN_PROGRESS' | 'COMPLETED' | 'NOT_STARTED' | 'READY';

interface DashboardProject {
  projectId: number;
  projectName: string;
  administrator: string;
  projectEnd: string;
  projectStatus: StatusType;
}

const columns = [
  { id: 'projectName', label: '프로젝트 명' },
  { id: 'administrator', label: '프로젝트 관리자' },
  { id: 'projectEnd', label: '마감일' },
  { id: 'projectStatus', label: '진행 상태' }
];

interface DashboardProjectTableProps {
  projects: Array<{
    projectId: number;
    projectName: string;
    administrator: string;
    projectEnd: string;
    projectStatus: string;
  }>;
}

const DashboardProjectTable: React.FC<DashboardProjectTableProps> = ({ projects }) => (
  <TableItem<DashboardProject>
    columns={columns}
    items={projects.map((project) => ({
      ...project,
      projectStatus: project.projectStatus as StatusType
    }))}
    renderCell={(column, item) => {
      if (column.id === 'projectStatus') {
        return <StatusBadge status={item.projectStatus} />;
      }
      return item[column.id as keyof DashboardProject] ?? '-';
    }}
  />
);

export default DashboardProjectTable;
