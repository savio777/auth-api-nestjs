import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { AuthResponseDto, LoginDto, RegisterDto } from './dtos/auth';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { hash as createHash, compare as compareHash } from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly saltRounds = 10;

  constructor(private prismaService: PrismaService) {}

  async register(dataDto: RegisterDto): Promise<AuthResponseDto> {
    const { email, name, password } = dataDto;

    const hashedPassword = await createHash(password, this.saltRounds);

    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new UnauthorizedException('User already exists');
    }

    const userCreated = await this.prismaService.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return {
      data: {
        id: userCreated.id,
        email: userCreated.email,
        name: userCreated.name,
        updatedAt: userCreated.updatedAt,
        createdAt: userCreated.createdAt,
      },
      message: 'User registered successfully',
    };
  }

  async login(dataDto: LoginDto): Promise<AuthResponseDto> {
    const { email, password } = dataDto;

    const hashedPassword = await createHash(password, this.saltRounds);

    const userFind = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!userFind) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await compareHash(
      hashedPassword,
      userFind.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      data: { email },
      message: 'User logged in successfully',
    };
  }
}
