import { Body, Controller, Post } from '@nestjs/common';
import type { LoginDto, RegisterDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST auth/login
  @Post('login')
  async login(@Body() body: LoginDto) {
    const response = await this.authService.login(body);
    return response;
  }

  // POST auth/
  @Post('register')
  async register(@Body() body: RegisterDto) {
    const response = await this.authService.register(body);
    return response;
  }
}
