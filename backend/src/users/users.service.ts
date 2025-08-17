import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './user.repository';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}
  async register(user: CreateUserDto) {
    return this.repository.register(user);
  }

  async findAllUsers() {
    return this.repository.findAllUsers();
  }
  async findUserByEmail(email: string) {
    return await this.repository.findUserByEmail(email);
  }

  async getUser(userId: number) {
    return this.repository.getUser(userId);
  }
  async deleteUser(userId: number) {
    return this.repository.deleteUser(userId);
  }
  async getUserByRole(role: Role) {
    return this.repository.getUserByRole(role);
  }
}
