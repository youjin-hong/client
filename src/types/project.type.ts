export interface ProjectListData {
  projectId: number;
  projectAdmin: string;
  projectName: string;
  projectEnd: string;
  projectCreatedDate: string;
  projectStatus: 'IN_PROGRESS' | 'COMPLETED';
  testRate: number;
}

export interface ProjectDetailData {
  projectName: string;
  projectAdmin: string;
  projectStatus: string;
  projectCreatedDate: string;
  projectEnd: string;
  testExecutionTime: string | null;
  rootFigmaPage: string;
  description: string;
  fileName: string | null;
  figmaUrl: string;
  serviceUrl: string;
  reportSummary: string | null;
  testSummary: {
    totalRoutingTest: number;
    totalInteractionTest: number;
    totalMappingTest: number;
  } | null;
  pages: Array<{
    pageName: string;
    pageBaseUrl: string;
  }>;
}

export interface ProjectsParams {
  projectName?: string;
  sortBy?: string;
  cursor?: number | null;
}

export interface GenerateProject {
  projectName: string;
  expectedTestExecution: string;
  projectEnd: string;
  description: string;
  figmaFile: File | null;
  figmaUrl: string;
  serviceUrl: string;
  rootFigmaPage: string;
  administrator?: string;
  fileName?: string | null;
}
