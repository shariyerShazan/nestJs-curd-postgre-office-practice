import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    const result = this.authService.registerUser(registerUserDto);
    return result;
  }
}
