import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DeliveriesRepository } from './deliveries.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [DeliveriesController],
  providers: [DeliveriesService, DeliveriesRepository],
})
export class DeliveriesModule {}
