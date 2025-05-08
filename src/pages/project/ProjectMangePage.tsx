import { useNavigate } from 'react-router-dom';
import TableItem from '@/components/ui/table/CustomTable';
import ProjectTitle from '@/pages/project/_components/ProjectTitle';
import StatusBadge from '@/pages/project/_components/StatusBadge';
import { ROUTES } from '@/constants';
import { useGetProjectList } from '@/store/queries/project/useProjectQueries';
import { ProjectListData } from '@/types/project.type';

const columns = [
  { id: 'projectName', label: '프로젝트 명' },
  { id: 'projectAdmin', label: '프로젝트 관리자' },
  { id: 'projectEnd', label: '마감일' },
  { id: 'projectCreatedDate', label: '생성일' },
  { id: 'projectMember', label: '팀원' }, // TODO: 임시로 id 지어놓음 백엔드에서 추가해주면 수정해야함
  { id: 'projectStatus', label: '진행 상태' },
  { id: 'testRate', label: '이슈 완성률' }
];

export default function ProjectMangePage() {
  const navigate = useNavigate();
  const {
    data: projects = [],
    isPending,
    isError
  } = useGetProjectList({
    projectName: '',
    sortBy: 'rate',
    cursor: null
  });

  const handleItemClick = (item: ProjectListData) => {
    navigate(ROUTES.PROJECT_DETAIL.replace(':projectId', item.projectId.toString()));
  };

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>오류가 발생했습니다.</div>;

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <ProjectTitle />
      <TableItem
        columns={columns}
        items={projects}
        onItemClick={handleItemClick}
        className="w-full"
        renderCell={(column, item) => {
          if (column.id === 'projectStatus') {
            return <StatusBadge status={item.projectStatus} />;
          }
          if (column.id === 'testRate') {
            return <span>{item.testRate}%</span>;
          }

          return item[column.id as keyof typeof item];
        }}
      />
    </div>
  );
}
