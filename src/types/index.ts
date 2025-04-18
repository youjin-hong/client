export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ErrorResponse {
  response: unknown;
  status: number;
  message: string;
}
