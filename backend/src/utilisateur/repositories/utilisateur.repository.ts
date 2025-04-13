import { DatabaseService } from 'src/database/database.service';
import { CreateUtilisateurDto } from '../dto/create-utilisateur.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilisateurRepository {
  constructor(private databaseService: DatabaseService) {}
  async create(utilisateur: CreateUtilisateurDto) {
    return this.databaseService.utilisateur.create({
      data: {
        nom: utilisateur.nom,
        prenom: utilisateur.prenom,
        email: utilisateur.email,
        numero: utilisateur.numero,
      },
    });
  }
  async findAll() {
    return this.databaseService.utilisateur.findMany();
  }
}
