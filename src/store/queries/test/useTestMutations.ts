import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';
import { useMutation } from '@tanstack/react-query';

// test 관련 post, put, delete 등의 api
export const useRunTest = () => {
  return useMutation({
    mutationFn: async (projectId: number) => {
      const response = await axiosInstance.post(
        API_ENDPOINTS.PROJECTS.RUN_TEST.replace(':projectId', String(projectId)),
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      return response.data;
    }
  });
};
