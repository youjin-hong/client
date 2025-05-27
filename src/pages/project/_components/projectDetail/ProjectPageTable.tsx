interface ProjectPageTableProps {
  pages: Array<{
    pageName: string;
    pageBaseUrl: string;
  }>;
}

export default function ProjectPageTable({ pages = [] }: ProjectPageTableProps) {
  return (
    <div className="p-6 max-w-[320px]">
      <table className="w-full text-center">
        <thead>
          <tr className="text-14 text-typography-dark font-bold border-b border-b-[#CCCCCC]">
            <th className="py-2">페이지명</th>
            <th className="py-2">페이지 URL</th>
          </tr>
        </thead>
        <tbody>
          {pages.length > 0 ? (
            pages.map((page, index) => (
              <tr key={index} className="children:font-medium text-11 text-typography-dark">
                <td className="py-2">{page.pageName}</td>
                <td className="py-2">
                  <p>{page.pageBaseUrl}</p>
                </td>
              </tr>
            ))
          ) : (
            <tr className="children:font-medium text-11 text-typography-gray">
              <td colSpan={2} className="py-4 ont-medium text-16 text-typography-gray">
                탐지된 페이지가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
