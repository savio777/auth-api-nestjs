import { Injectable } from '@nestjs/common';
import type { LoginDto, RegisterDto } from './dtos/auth';

@Injectable()
export class AuthService {
  async register(dataDto: RegisterDto) {
    const { email, name, password } = dataDto;
    return {
      data: { email, name, password },
      message: 'User registered successfully',
    };
  }

  async login(dataDto: LoginDto) {
    const { email, password } = dataDto;
    return {
      data: { email, password },
      message: 'User logged in successfully',
    };
  }
}
