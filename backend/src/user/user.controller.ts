import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  register(@Body() user: CreateUserDto) {
    return this.userService.register(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  findUserByEmail(@Body('email') email: string) {
    console.log('email', email);
    return this.userService.findUserByEmail(email);
  }
}
