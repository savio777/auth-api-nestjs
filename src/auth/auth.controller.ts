import { Body, Controller, Post } from '@nestjs/common';
import type { LoginDto, RegisterDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST auth/login
  @Post('login')
  login(@Body() body: LoginDto) {
    const response = this.authService.login(body);
    return response;
  }

  // POST auth/register
  @Post('register')
  register(@Body() body: RegisterDto) {
    const response = this.authService.register(body);
    return response;
  }
}
