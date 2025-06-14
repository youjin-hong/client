import { useNavigate } from 'react-router-dom';
import TableItem from '@/components/ui/table/CustomTable';
import ProjectTitle from '@/pages/project/_components/ProjectTitle';
import StatusBadge from '@/pages/project/_components/StatusBadge';
import { ROUTES } from '@/constants';
import { useGetProjectList } from '@/store/queries/project/useProjectQueries';
import { ProjectListData } from '@/types/project.type';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/redux/store';
import { BeatLoader } from 'react-spinners';

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
  const projectName = useSelector((state: RootState) => state.searchReducer.projectName);
  const {
    data: projects = [],
    isPending,
    isError
  } = useGetProjectList({
    projectName,
    sortBy: '',
    cursor: null
  });

  const handleItemClick = (item: ProjectListData) => {
    navigate(ROUTES.PROJECT_DETAIL.replace(':projectId', item.projectId.toString()));
  };

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader color="#B3C7AA" />
      </div>
    );
  if (isError) return <div>오류가 발생했습니다.</div>;

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <ProjectTitle />
      {projects.length === 0 ? (
        <div className="w-full text-center py-20 text-typography-gray text-16 font-medium">
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <TableItem
          columns={columns}
          items={projects}
          onItemClick={handleItemClick}
          className="w-full"
          renderCell={(column, item) => {
            if (column.id === 'projectStatus') {
              return <StatusBadge status={item.projectStatus} />;
            }
            if (column.id === 'projectMember') {
              return (
                <div className="flex -space-x-1 overflow-hidden">
                  <img
                    className="inline-block size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              );
            }
            if (column.id === 'testRate') {
              if (item.testRate === null) {
                return <span>-</span>;
              } else {
                return <span>{item.testRate}%</span>;
              }
            }

            return item[column.id as keyof typeof item];
          }}
        />
      )}
    </div>
  );
}
