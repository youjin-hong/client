export interface TestData {
  projectId: number;
  projectName?: string;
  successRoutingTest?: number;
  successInteractionTest?: number;
  successMappingTest?: number;
  totalRoutingTest?: number;
  totalInteractionTest?: number;
  totalMappingTest?: number;
  projectCreatedDate?: string;
}

export interface DashBoardTestList {
  testId: number;
  projectName: string;
  pageName: string;
  testType: string;
  testStatus: string;
}
