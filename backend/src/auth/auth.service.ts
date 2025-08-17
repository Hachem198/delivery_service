import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthResultDto } from './dto/auth-result.dto';
import { UserDataDto } from './dto/user-data.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { HashService } from './hash/hash.service';
import { AuthRepository } from './repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private hashService: HashService,
    private authRepo: AuthRepository,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async authenticate(user: UserLoginDto): Promise<AuthResultDto> {
    const userFound = await this.validateUser(user);
    return this.signIn(userFound);
  }
  async validateUser(user: UserLoginDto): Promise<UserDataDto | null> {
    const userFound = await this.usersService.findUserByEmail(user.email);

    if (
      userFound &&
      (await this.hashService.comparePassword(
        user.password,
        userFound.password,
      ))
    ) {
      return {
        id: userFound.userId,
        firstName: userFound.firstName,
        lastName: userFound.lastName,
        role: userFound.role,
        email: userFound.email,
        number: userFound.number,
      };
    }
    return null;
  }
  async signIn(user: UserDataDto): Promise<AuthResultDto> {
    const tokenPayload = {
      sub: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      number: user.number,
      email: user.email,
    };
    const accessToken = await this.jwtService.signAsync(tokenPayload);
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      accessToken: accessToken,
    };
  }
}
