import Button from '@/components/ui/button/Button';

interface ReportBriefProps {
  reportSummary: string | null;
}
export default function ReportBrief({ reportSummary }: ReportBriefProps) {
  return (
    <section className="mb-5">
      <div className="flex justify-between items-center py-4 pr-3">
        <p className="font-bold text-14 text-typography-dark pl-4">리포트 요약</p>
        <Button text="테스트 리포트 바로가기" className="border-none shadow-custom h-6" />
      </div>
      {reportSummary === null ? (
        <div className="shadow-custom rounded-15 p-4 font-medium text-11 text-typography-dark">
          <div className="border border-dashed border-typography-gray p-4 rounded-md w-full min-h-[200px] h-full flex justify-center items-center">
            <p className="font-medium text-16 text-typography-gray">생성된 리포트가 없습니다.</p>
          </div>
        </div>
      ) : (
        <p className="shadow-custom rounded-15 p-4 font-medium text-11 text-typography-dark">{reportSummary}</p>
      )}
    </section>
  );
}
