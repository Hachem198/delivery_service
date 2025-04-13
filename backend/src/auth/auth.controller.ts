import {
  Body,
  Controller,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {
    throw new NotImplementedException('this method is not implemented');
  }
}
