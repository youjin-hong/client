// 사용자 정보 타입 (TODO: 필요에 따라 확장/축소 필요)
export interface User {
  id?: number;
  email: string;
  username: string;
  address: string;
  phoneNumber: string;
}

export interface UserProfileResponse {
  status: string;
  message: string;
  data: {
    id: number;
    email: string;
    address: string;
    phoneNumber: string;
  };
  code: number;
}
