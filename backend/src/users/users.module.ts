import { Module } from '@nestjs/common';
import { HashService } from 'src/auth/hash/hash.service';
import { DatabaseModule } from 'src/database/database.module';
import { UsersRepository } from './user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, HashService],
  exports: [UsersService, UsersRepository],
})
export class UserModule {}
