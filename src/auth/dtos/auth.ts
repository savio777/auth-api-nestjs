export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  password: string;
  email: string;
}

export interface AuthResponseDto {
  data: Record<string, any>;
  message: string;
}

export interface ErrorResponseDto {
  error: string;
  message: string;
  statusCode: number;
}
