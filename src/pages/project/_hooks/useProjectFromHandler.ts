import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ROUTES } from '@/constants';
import { GenerateProject } from '@/types/project.type';
import { useRunTest } from '@/store/queries/test/useTestMutations';
import { useGenerateProject, useUpdateProject } from '@/store/queries/project/useProjectMutations';
import { useUserProfile } from '@/store/queries/user/useUserQueries';
import { useGetProjectDetail } from '@/store/queries/project/useProjectQueries';

interface UseProjectFromHandlerProps {
  mode: 'create' | 'modify';
}

export const useProjectFromHandler = ({ mode }: UseProjectFromHandlerProps) => {
  const navigate = useNavigate();
  const { projectId } = useParams(); // URL에서 projectId 가져오기

  // API 호출 함수 정의
  const generateProject = useGenerateProject();
  const updateProject = useUpdateProject(Number(projectId));
  const runTest = useRunTest();
  const { data: userData, isPending: isUserDataLoading, isError: isUserDataError } = useUserProfile();
  const {
    data: projectDetail,
    isPending: isProjectLoading,
    isError: isProjectError
  } = useGetProjectDetail(Number(projectId));

  // 등록만 하는 경우, 등록 후 테스트까지 돌리는 경우 타입 정의
  const handleNavigate = (actionType: 'register' | 'test', responseProjectId?: number) => {
    if (actionType === 'register') {
      navigate(ROUTES.PROJECT_DETAIL.replace(':projectId', String(responseProjectId)));
    } else if (actionType === 'test') {
      navigate(ROUTES.TESTS);
    }
  };

  // FormData 생성
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
      actionType: actionType,
      ...(mode === 'modify' && { projectId: Number(projectId) })
    };

    data.append('request', new Blob([JSON.stringify(requestData)], { type: 'application/json' }), 'request.json');

    if (figmaFile) {
      data.append('file', figmaFile, figmaFile.name);
    }

    return data;
  };

  // 프로젝트 제출 처리
  const handleProjectSubmit = (formData: GenerateProject, actionType: 'register' | 'test', figmaFile: File | null) => {
    const data = createFormData(formData, actionType, figmaFile);
    const mutation = mode === 'create' ? generateProject : updateProject!;

    mutation.mutate(data, {
      onSuccess: (response) => {
        toast.success(response.message);
        const responseProjectId = response.data?.projectId || Number(projectId);

        if (actionType === 'test' && responseProjectId) {
          runTest.mutate(responseProjectId);
        }

        handleNavigate(actionType, responseProjectId);
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };

  // 프로젝트 생성/수정 취소
  const handleCancelProject = () => {
    const isConfirmed = confirm('프로젝트 생성을 취소하시겠습니까?');
    if (isConfirmed) {
      navigate(ROUTES.HOME);
    }
  };

  // mode를 나눠놨으므로 return문 밖에서 여기서 계산해서 밖에서 그냥 변수 갖다 쓰기
  const isPending = mode === 'create' ? isUserDataLoading : isUserDataLoading || isProjectLoading;
  const isError = mode === 'create' ? isUserDataError || !userData : isUserDataError || !userData || isProjectError;
  const username = mode === 'create' ? userData?.username : projectDetail?.projectAdmin || userData?.username;
  const initialValues = mode === 'modify' ? projectDetail : undefined;
  const isLoading = generateProject.isPending || (updateProject?.isPending ?? false) || runTest.isPending;

  return {
    isPending,
    isError,
    username,
    initialValues,
    handleProjectSubmit,
    handleCancelProject,
    isLoading
  };
};
