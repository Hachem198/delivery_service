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

  async findUserByEmail(utilisateur: UserLoginDto): Promise<any> {
    return this.database.utilisateur.findUnique({
      where: { email: utilisateur.email },
    });
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
