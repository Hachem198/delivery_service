import { Injectable } from '@nestjs/common';
import { CreateDemandeDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
import { DemandeRepository } from './repositories/demande.repository';

@Injectable()
export class DemandeService {
  constructor(private repository: DemandeRepository) {}
  async create(createDemandeDto: CreateDemandeDto) {
    return this.repository.create();
  }

  findAll() {
    return `This action returns all demande`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demande`;
  }

  update(id: number, updateDemandeDto: UpdateDemandeDto) {
    return `This action updates a #${id} demande`;
  }

  remove(id: number) {
    return `This action removes a #${id} demande`;
  }
}
