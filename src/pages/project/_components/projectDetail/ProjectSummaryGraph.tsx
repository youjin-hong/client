import LinearProgressBar2 from '@/components/ui/progressBar/LinearProgressBar2';
import { colors } from '@/styles/theme/colors';
import { calculatePercentage } from '@/utils/useCalculateTestPercentage';

interface ProjectSummaryGraphProps {
  testSummary: {
    routingSuccessCount: number;
    routingFailCount: number;
    interactionSuccessCount: number;
    interactionFailCount: number;
    mappingSuccessCount: number;
    mappingFailCount: number;
  };
}

export default function ProjectSummaryGraph({ testSummary }: ProjectSummaryGraphProps) {
  const {
    routingSuccessCount,
    routingFailCount,
    interactionSuccessCount,
    interactionFailCount,
    mappingSuccessCount,
    mappingFailCount
  } = testSummary;

  const totalRoutingTest = routingSuccessCount + routingFailCount;
  const totalInteractionTest = interactionSuccessCount + interactionFailCount;
  const totalMappingTest = mappingSuccessCount + mappingFailCount;

  const routingPercentage = calculatePercentage(routingSuccessCount, totalRoutingTest);
  const interactionPercentage = calculatePercentage(interactionSuccessCount, totalInteractionTest);
  const mappingPercentage = calculatePercentage(mappingSuccessCount, totalMappingTest);

  return (
    <>
      <div className="py-8 px-10 basis-2/3 flex flex-col items-center gap-5 h-full w-full">
        <LinearProgressBar2 value={routingPercentage} label="ROUTING" color={colors.teal_1} />
        <LinearProgressBar2 value={interactionPercentage} label="INTERACTION" color={colors.purple_1} />
        <LinearProgressBar2 value={mappingPercentage} label="COMPONENT" color={colors.brown_1} />
      </div>
    </>
  );
}
