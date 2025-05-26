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
      <p className="shadow-bottom_custom rounded-15 p-4 font-medium text-11 text-typography-dark">{reportSummary}</p>
    </section>
  );
}
