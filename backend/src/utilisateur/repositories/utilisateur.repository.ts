import { DatabaseService } from 'src/database/database.service';
import { CreateUtilisateurDto } from '../dto/create-utilisateur.dto';
import { Injectable } from '@nestjs/common';
import { HashService } from 'src/auth/hash/hash.service';

@Injectable()
export class UtilisateurRepository {
  constructor(
    private databaseService: DatabaseService,
    private hashService: HashService,
  ) {}

  async register(user: CreateUtilisateurDto) {
    const hashedMotDePass = await this.hashService.hashPassword(user.motDePass);
    return this.databaseService.utilisateur.create({
      data: {
        nom: user.nom,
        prenom: user.prenom,
        numero: user.numero,
        email: user.email,
        motDePass: hashedMotDePass,
        confirmationMotDePass: user.confirmationMotDePass,
        role: user.role,
      },
    });
  }
  async findAll() {
    return this.databaseService.utilisateur.findMany();
  }
}
