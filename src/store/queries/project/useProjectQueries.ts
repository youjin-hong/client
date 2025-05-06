import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';
import { ProjectsParams } from '@/types/project.type';

export const useGetProjectList = (params: ProjectsParams = {}) => {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: async () => {
      const response = await axiosInstance.get(API_ENDPOINTS.PROJECTS.LIST, { params });

      return response.data.data.projectSummaries ?? [];
    }
  });
};
