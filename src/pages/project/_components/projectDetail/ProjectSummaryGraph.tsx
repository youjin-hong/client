import LinearProgressBar2 from '@/components/ui/progressBar/LinearProgressBar2';
import { colors } from '@/styles/theme/colors';
import { calculatePercentage } from '@/utils/useCalculateTestPercentage';

interface ProjectSummaryGraphProps {
  testSummary: {
    totalInteractionTest: number;
    totalMappingTest: number;
    totalRoutingTest: number;
  };
}

export default function ProjectSummaryGraph({ testSummary }: ProjectSummaryGraphProps) {
  const { totalInteractionTest, totalMappingTest, totalRoutingTest } = testSummary;

  const totalTest = totalInteractionTest + totalMappingTest + totalRoutingTest;

  const routingPercentage = calculatePercentage(totalRoutingTest, totalTest);
  const interactionPercentage = calculatePercentage(totalInteractionTest, totalTest);
  const mappingPercentage = calculatePercentage(totalMappingTest, totalTest);

  return (
    <>
      <div className="py-8 px-10 basis-2/3 flex flex-col items-center gap-5 h-full w-full max-sm:px-5">
        <LinearProgressBar2 value={routingPercentage} label="ROUTING" color={colors.teal_1} />
        <LinearProgressBar2 value={interactionPercentage} label="INTERACTION" color={colors.purple_1} />
        <LinearProgressBar2 value={mappingPercentage} label="COMPONENT" color={colors.brown_1} />
      </div>
    </>
  );
}
