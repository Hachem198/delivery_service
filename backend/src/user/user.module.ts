import { Module } from '@nestjs/common';
import { HashService } from 'src/auth/hash/hash.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from './repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, HashService],
  exports: [UserService, UserRepository],
})
export class UserModule {}
