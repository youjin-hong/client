import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';

// 프로젝트 생성
export const useGenerateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectData: FormData) => {
      const response = await axiosInstance.post(API_ENDPOINTS.PROJECTS.CREATE, projectData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    },
    onSuccess: () => {
      // 프로젝트 리스트에 업데이트
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });
};

// 프로젝트 수정
export const useUpdateProject = (projectId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectData: FormData) => {
      const response = await axiosInstance.put(
        API_ENDPOINTS.PROJECTS.UPDATE.replace(':projectId', String(projectId)),
        projectData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });
};

// 프로젝트 삭제
export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectId: number) => {
      const response = await axiosInstance.delete(
        API_ENDPOINTS.PROJECTS.DELETE.replace(':projectId', String(projectId))
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });
};
