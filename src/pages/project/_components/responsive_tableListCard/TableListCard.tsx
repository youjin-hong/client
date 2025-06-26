import StatusBadge from '@/pages/project/_components/StatusBadge';
import { ProjectListData } from '@/types/project.type';

export default function TableListCard({ project, onClick }: { project: ProjectListData; onClick: () => void }) {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow border cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}>
      {/* 프로젝트명, 상태 */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-base text-gray-900 flex-1 mr-3 line-clamp-2">{project.projectName}</h3>
        <StatusBadge status={project.projectStatus} />
      </div>

      {/* 관리자,마감일,생성일 */}
      <div className="space-y-2 mb-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">관리자</span>
          <span className="font-medium text-gray-900">{project.projectAdmin}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">마감일</span>
          <span className="text-gray-900">{project.projectEnd}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">생성일</span>
          <span className="text-gray-900">{project.projectCreatedDate}</span>
        </div>
      </div>

      {/* 팀원,이슈 완성률 */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">팀원</span>
          <div className="flex -space-x-1">
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
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-600">완성률</span>
          <span className="text-sm font-semibold text-blue-600">
            {project.testRate === null ? '-' : `${project.testRate}%`}
          </span>
        </div>
      </div>
    </div>
  );
}
