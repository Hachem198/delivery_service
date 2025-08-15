import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UserLoginDto } from '../dto/user-login.dto';
import { UserDataDto } from '../dto/user-data.dto';
import { HashService } from '../hash/hash.service';
@Injectable()
export class AuthRepository {
  constructor(
    private database: DatabaseService,
    private hashService: HashService,
  ) {}
}
