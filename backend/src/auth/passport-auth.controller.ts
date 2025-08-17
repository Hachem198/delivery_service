import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { PassportJwtAuthGuard } from './guards/passport-jwt.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class PassportAuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Request() req) {
    return this.authService.signIn(req.user);
  }
  @Post('register')
  register(@Body() user: CreateUserDto) {
    return this.usersService.register(user);
  }
  @Get('profile')
  @UseGuards(PassportJwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
