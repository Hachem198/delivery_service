import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DemandeRepository {
  constructor(private database: DatabaseService) {}
  async create() {}
}
