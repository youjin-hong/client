type DashboardPageProps = {
  props1: string;
  props2: boolean;
};

export function DashboardPage({ props1, props2 }: DashboardPageProps) {
  return (
    <>
      <h1>{props1}</h1>
      <p>{props2}</p>
    </>
  );
}
