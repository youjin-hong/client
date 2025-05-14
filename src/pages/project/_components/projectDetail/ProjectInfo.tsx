import ProjectInfoItem from '@/pages/project/_components/projectDetail/ProjectInfoItem';

export default function ProjectInfo() {
  return (
    <section>
      <h2 className="font-bold text-[24px] pb-4">프로젝트 이름</h2>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <ProjectInfoItem label="프로젝트 관리자" value="test1234" />
          <ProjectInfoItem label="프로젝트 생성일" value="2025.05.14" />
          <ProjectInfoItem label="프로젝트 마감일" value="2025.05.17" />
          <ProjectInfoItem label="테스트 실행 횟수" value="5" />
        </div>
        <div>
          <ProjectInfoItem label="설명" value="사랑할 수 없는 존재" />
        </div>
        <span className="border border-typography-gray my-1"></span>
      </div>
    </section>
  );
}
