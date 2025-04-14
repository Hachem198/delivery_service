import {
  Body,
  Controller,
  NotImplementedException,
  Post,
  Get,
} from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login() {
    throw new NotImplementedException('this method is not implemented');
  }
  @Get()
  findUserByEmail(@Body() user: UserLoginDto) {
    return this.authService.findUserByEmail(user);
  }
}
