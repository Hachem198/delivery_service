import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { State } from '@prisma/client';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveriesRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async createDelivery(userId: number, createDeliveryDto: CreateDeliveryDto) {
    return this.databaseService.delivery.create({
      data: {
        pickUpLocation: createDeliveryDto.pickUpLocation,
        pickUpDate: createDeliveryDto.pickUpDate,
        dropOffLocation: createDeliveryDto.dropOffLocation,
        service: createDeliveryDto.service,
        productType: createDeliveryDto.productType,
        clientId: userId,
      },
    });
  }

  async findDelivery(userId: number, id: number) {
    return this.databaseService.delivery.findUnique({
      where: { id, clientId: userId },
    });
  }

  async findAssignedDeliveries(userId: number) {
    return this.databaseService.delivery.findMany({
      where: { assignedCourierId: userId },
    });
  }

  async findAllDeliveries() {
    return this.databaseService.delivery.findMany();
  }

  async deleteDelivery(id: number) {
    return this.databaseService.delivery.delete({
      where: { id },
    });
  }

  async updateDeliveryState(id: number, state: State) {
    return this.databaseService.delivery.update({
      where: { id },
      data: { state },
    });
  }

  async updateDeliveryBeforeAssigned(
    userId: number,
    id: number,
    updatedDelivery: UpdateDeliveryDto,
  ) {
    return this.databaseService.delivery.update({
      where: { id, clientId: userId },
      data: {
        ...updatedDelivery,
      },
    });
  }

  async assignDelivery(id: number, courierId: number) {
    return this.databaseService.delivery.update({
      where: { id },
      data: { assignedCourierId: courierId },
    });
  }
}
