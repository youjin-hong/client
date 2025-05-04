// 회원가입 요청 타입
export interface SignupRequest {
  email: string;
  password: string;
  username: string;
}

// 로그인 요청 타입
export interface LoginRequest {
  email: string;
  password: string;
}

// 토큰 정보 타입
export interface TokenData {
  accessToken: string;
}

// 사용자 정보 타입 (TODO: 필요에 따라 확장/축소 필요)
export interface User {
  id: number;
  email: string;
  username: string;
  address: string | null;
  phoneNumber: string | null;
}

// 로그인 응답 data 부분
export interface LoginResponseData {
  accessToken: string;
}

// 토큰 재발급 response의 data 부분
export interface RefreshTokenResponseData {
  accessToken: string;
}
