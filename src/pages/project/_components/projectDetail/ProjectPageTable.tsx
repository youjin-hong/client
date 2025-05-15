export default function ProjectPageTable() {
  return (
    <div className="p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="text-14 text-typography-dark font-bold border-b border-b-[#CCCCCC]">
            <th className="px-4 py-2">페이지명</th>
            <th className="px-4 py-2">페이지 URL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="children:font-medium text-11 text-typography-dark">
            <td className="px-4 py-2">페이지이름</td>
            <td className="px-4 py-2">
              <p>페이지유알엑</p>
            </td>
          </tr>
          <tr className="children:font-medium text-11 text-typography-dark">
            <td className="px-4 py-2">페이지이름</td>
            <td className="px-4 py-2">
              <p>페이지유알엑</p>
            </td>
          </tr>
          <tr className="children:font-medium text-11 text-typography-dark">
            <td className="px-4 py-2">페이지이름</td>
            <td className="px-4 py-2">
              <p>페이지유알엑</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
