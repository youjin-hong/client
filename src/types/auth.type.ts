import { User } from '@/types/user.type';

// 토큰 정보 타입
export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  user: User | null;
}

// 토큰 재발급 response의 data 부분
export interface RefreshTokenResponseData {
  accessToken: string;
}
