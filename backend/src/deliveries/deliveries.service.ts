import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { DeliveriesRepository } from './deliveries.repository';
import { State } from '@prisma/client';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveriesService {
  constructor(private readonly repository: DeliveriesRepository) {}
  createDelivery(userId: number, createDeliveryDto: CreateDeliveryDto) {
    return this.repository.createDelivery(userId, createDeliveryDto);
  }

  findAssignedDeliveries(userId: number) {
    return this.repository.findAssignedDeliveries(userId);
  }

  findAllDeliveries() {
    return this.repository.findAllDeliveries();
  }

  findDelivery(userId: number, id: number) {
    return this.repository.findDelivery(userId, id);
  }

  updateDeliveryState(id: number, state: State) {
    return this.repository.updateDeliveryState(id, state);
  }

  deleteDelivery(id: number) {
    return this.repository.deleteDelivery(id);
  }

  updateDeliveryBeforeAssigned(
    userId: number,
    id: number,
    updatedDelivery: UpdateDeliveryDto,
  ) {
    return this.repository.updateDeliveryBeforeAssigned(
      userId,
      id,
      updatedDelivery,
    );
  }

  assignDelivery(id: number, courierId: number) {
    return this.repository.assignDelivery(id, courierId);
  }
}
