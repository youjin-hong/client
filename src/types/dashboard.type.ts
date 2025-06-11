export interface DashboardHomeResponse {
  status: string;
  message: string;
  data: {
    totalProjects: number;
    completedTests: number;
    incompleteTests: number;
    projects: Array<{
      projectId: number;
      projectName: string;
      administrator: string;
      projectEnd: string;
      projectStatus: string;
    }>;
    tests: Array<{
      testId: number;
      projectId: number;
      projectName: string;
      pageName: string;
      testType: string;
      testStatus: string;
    }>;
  };
  code: number;
}
