import { RegisterUserDto } from './dto/registerUser.dto';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerUser(registerUserDto: RegisterUserDto) {
    console.log(registerUserDto);
    return this.userService.createUser();
  }
}
