import { API_ENDPOINTS } from '@/constants';
import axiosInstance from '@/services/api/axios';
import { LoginRequest, LoginResponse, SignupRequest } from '@/types/user.type';
import { useMutation } from '@tanstack/react-query';

export const useSignup = () => {
  return useMutation({
    mutationFn: async (signupData: SignupRequest) => {
      const response = await axiosInstance.post(API_ENDPOINTS.USER.SIGNUP, signupData);
      console.log('회원가입 완료', response);

      return response.data;
    }
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (loginData: LoginRequest) => {
      const response = await axiosInstance.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, loginData, {
        withCredentials: true
      });

      // TODO: 일단 accessToken 로컬스토리지에 저장
      if (response.data?.data?.accessToken) {
        localStorage.setItem('token', response.data.data.accessToken);
      }
      console.log('로그인 완료', response.data);
      return response.data;
    }
  });
};
