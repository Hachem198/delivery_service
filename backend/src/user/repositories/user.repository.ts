import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { HashService } from 'src/auth/hash/hash.service';
@Injectable()
export class UserRepository {
  constructor(
    private databaseService: DatabaseService,
    private hashService: HashService,
  ) {}

  async register(user: CreateUserDto) {
    const hashedPassword = await this.hashService.hashPassword(user.password);
    return this.databaseService.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        number: user.number,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    });
  }
  async findUserByEmail(email: string) {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });
    return user;
  }
  async findAll() {
    return this.databaseService.user.findMany();
  }
}
