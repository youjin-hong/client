import { useGenerateProject } from '@/store/queries/project/useProjectMutations';
import { useRunTest } from '@/store/queries/test/useTestMutations';
import { GenerateProject } from '@/types/project.type';
import { toast } from 'react-toastify';

export const useProjectForm = (
  userData: GenerateProject,
  onNavigate: (actionType: 'register' | 'test', projectId?: number) => void
) => {
  const generateProject = useGenerateProject();
  const runTest = useRunTest();

  const createFormData = (formData: GenerateProject, actionType: 'register' | 'test', figmaFile: File | null) => {
    const data = new FormData();

    const requestData = {
      projectName: formData.projectName,
      expectedTestExecution: formData.expectedTestExecution,
      projectEnd: formData.projectEnd,
      description: formData.description,
      figmaUrl: formData.figmaUrl,
      serviceUrl: formData.serviceUrl,
      rootFigmaPage: formData.rootFigmaPage,
      administrator: userData?.administrator || undefined,
      actionType: actionType
    };

    data.append('request', new Blob([JSON.stringify(requestData)], { type: 'application/json' }), 'request.json');

    if (figmaFile) {
      data.append('file', figmaFile, figmaFile.name);
    }

    return data;
  };

  const handleProjectSubmit = (formData: GenerateProject, actionType: 'register' | 'test', figmaFile: File | null) => {
    const data = createFormData(formData, actionType, figmaFile);

    generateProject.mutate(data, {
      onSuccess: (response) => {
        toast.success(response.message);
        const projectId = response.data?.projectId;

        if (actionType === 'test' && projectId) {
          runTest.mutate(projectId);
        }

        onNavigate(actionType, projectId);
      },
      onError: () => {
        alert('필수 입력란을 모두 입력해주세요.');
      }
    });
  };

  return {
    handleProjectSubmit,
    isLoading: generateProject.isPending || runTest.isPending
  };
};
