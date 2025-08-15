// import {
//   Body,
//   Controller,
//   NotImplementedException,
//   Post,
//   Get,
//   UseGuards,
//   Request,
// } from '@nestjs/common';
// import { UserLoginDto } from './dto/user-login.dto';
// import { AuthService } from './auth.service';
// import { AuthGuard } from './guards/auth.guard';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}
//   @Post('login')
//   login(@Body() user: UserLoginDto) {
//     return this.authService.authenticate(user);
//   }
//   @UseGuards(AuthGuard)
//   @Get('profile')
//   getProfile(@Request() req) {
//     return req.user;
//   }
// }
