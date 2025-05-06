// 회원정보 조회

import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';
import { useQuery } from '@tanstack/react-query';

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const response = await axiosInstance.get(API_ENDPOINTS.USER.PROFILE);
      return response.data.data;
    }
  });
};
