import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/services/api/axios';
import { API_ENDPOINTS } from '@/constants';
import { DashboardHomeResponse } from '@/types/dashboard.type';

export const useDashboardHome = () => {
  return useQuery({
    queryKey: ['dashboardHome'],
    queryFn: async () => {
      const response = await axiosInstance.get<DashboardHomeResponse>(API_ENDPOINTS.DASHBOARD);
      return response.data.data;
    }
  });
};
