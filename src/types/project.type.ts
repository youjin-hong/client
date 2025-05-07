export interface ProjectListData {
  projectId: number;
  projectAdmin: string;
  projectName: string;
  projectEnd: string;
  projectCreatedDate: string;
  projectStatus: 'IN_PROGRESS' | 'COMPLETED';
  testRate: number;
}

export interface ProjectResponse {
  status: string;
  message: string;
  data: {
    ProjectList: ProjectListData[];
  };
  code: number;
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
  figmaUrl: string;
  serviceUrl: string;
  rootFigmaPage: string;
  administrator?: string;
}
