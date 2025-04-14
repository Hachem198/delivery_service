import { Inject, Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { UtilisateurRepository } from './repositories/utilisateur.repository';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UtilisateurService {
  constructor(private repository: UtilisateurRepository) {}
  async register(createUtilisateurDto: CreateUtilisateurDto) {
    return this.repository.register(createUtilisateurDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return `This action returns a #${id} utlisateur`;
  }

  async update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utlisateur`;
  }

  async remove(id: number) {
    return `This action removes a #${id} utlisateur`;
  }
}
