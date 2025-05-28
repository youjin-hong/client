import LinearProgressBar2 from '@/components/ui/progressBar/LinearProgressBar2';
import { colors } from '@/styles/theme/colors';

interface ProjectSummaryGraphProps {
  totalInteractionTest: number;
  totalMappingTest: number;
  totalRoutingTest: number;
}

export default function ProjectSummaryGraph({
  totalInteractionTest,
  totalMappingTest,
  totalRoutingTest
}: ProjectSummaryGraphProps) {
  return (
    <>
      <div className="py-8 px-10 basis-2/3 flex flex-col items-center gap-5 h-full w-full">
        <LinearProgressBar2 value={totalInteractionTest} label="ROUTING" color={colors.teal_1} />
        <LinearProgressBar2 value={totalMappingTest} label="INTERACTION" color={colors.purple_1} />
        <LinearProgressBar2 value={totalRoutingTest} label="COMPONENT" color={colors.brown_1} />
      </div>
    </>
  );
}
