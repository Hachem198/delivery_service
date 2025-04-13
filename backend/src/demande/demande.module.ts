import { Module } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { DemandeController } from './demande.controller';
import { DemandeRepository } from './repositories/demande.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DemandeController],
  providers: [DemandeService, DemandeRepository],
})
export class DemandeModule {}
