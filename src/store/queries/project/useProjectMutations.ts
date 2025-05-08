// crud 공간
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';
import { GenerateProject } from '@/types/project.type';

// 프로젝트 생성
export const useGenerateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectData: GenerateProject) => {
      const response = await axiosInstance.post(API_ENDPOINTS.PROJECTS.CREATE, projectData);
      return response.data;
    },
    onSuccess: () => {
      // 프로젝트 리스트에 업데이트
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });
};
