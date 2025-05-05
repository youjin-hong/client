import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';
import { SignupRequest } from '@/types/user.type';
import { useMutation } from '@tanstack/react-query';

export const useSignup = () => {
  return useMutation({
    mutationFn: async (userData: SignupRequest) => {
      const response = await axiosInstance.post(API_ENDPOINTS.USER.SIGNUP, userData);
      return response;
    }
  });
};
