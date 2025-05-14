// progress bar를 위한 percentage 계산 함수
export const calculatePercentage = (success: number, total: number) => {
  return total === 0 ? 0 : Math.round((success / total) * 100);
};
