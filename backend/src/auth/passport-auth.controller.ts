import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';

import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { PassportJwtAuthGuard } from './guards/passport-jwt.guard';

@Controller('auth')
export class PassportAuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Request() req) {
    return this.authService.signIn(req.user);
  }
  @Get('profile')
  @UseGuards(PassportJwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
