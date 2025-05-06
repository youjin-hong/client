import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';
import { User, UserProfileResponse } from '@/types/user.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// 회원 정보로 post, put, delete 하는 경우
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: User) => {
      const response = await axiosInstance.put<UserProfileResponse>(API_ENDPOINTS.USER.EDIT, userData);
      return response.data;
    },
    onSuccess: () => {
      // 프로필 정보 업데이트
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    }
  });
};
