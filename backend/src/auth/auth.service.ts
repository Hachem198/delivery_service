import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
type SignInData = { clientId: number; nom: string };
@Injectable()
export class AuthService {
  async validateUser(input: UserLoginDto): Promise<null> {}
}
