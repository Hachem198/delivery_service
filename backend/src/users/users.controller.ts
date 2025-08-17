import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Roles('ADMIN')
  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }
  @Roles('ADMIN')
  @Get()
  async getUserByRole(@Query('role') role: Role) {
    return this.usersService.getUserByRole(role);
  }
  @Roles('ADMIN', 'DELIVERY_PERSON', 'CLIENT')
  @Get(':id')
  getUser(@Request() req) {
    return this.usersService.getUser(req.user.userId);
  }

  @Post()
  findUserByEmail(@Body('email') email: string) {
    console.log('email', email);
    return this.usersService.findUserByEmail(email);
  }
  @Delete(':id')
  deleteUser(@Request() req) {
    return this.usersService.deleteUser(req.user.userId);
  }
}
