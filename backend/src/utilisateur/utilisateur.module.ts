import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurRepository } from './repositories/utilisateur.repository';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UtilisateurController],
  providers: [UtilisateurService, UtilisateurRepository],
})
export class UtilisateurModule {}
