import { Injectable } from '@nestjs/common';
import { UserLoginDto  } from './dto/user-login.dto';
import { HashService } from './hash/hash.service';
import { AuthRepository } from './repositories/auth.repository';
import { UserDataDto } from './dto/user-data.dto';

@Injectable()
export class AuthService {
  constructor(private hashService : HashService , private authRepo : AuthRepository){}
  async findUserByEmail(user: UserLoginDto) {
    return this.authRepo.findUserByEmail(user);
  }
  async validateUser(user: UserLoginDto): Promise<UserDataDto | null> {
    const userFound = await this.findUserByEmail(user);
    if (
      userFound &&
      this.hashService.comparePassword(user.motDePass, userFound.motDePass)
    ) {
      return {
        nom: userFound.nom,
        prenom: userFound.prenom,
        role: userFound.role,
      };
    }
    return null;
  }
}
}
