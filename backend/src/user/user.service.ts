import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}
  async register(user: CreateUserDto) {
    return this.repository.register(user);
  }

  async findAll() {
    return this.repository.findAll();
  }
  async findUserByEmail(email: string) {
    return await this.repository.findUserByEmail(email);
  }

  async findOne(id: number) {
    return `This action returns a #${id} utlisateur`;
  }
}
