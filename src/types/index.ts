// API response 기본 구조
export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
  code: number;
}

export interface ErrorResponse {
  response: unknown;
  status: number;
  message: string;
}
