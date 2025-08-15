import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { PassportJwtAuthGuard } from 'src/auth/guards/passport-jwt.guard';
import { State } from '@prisma/client';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@UseGuards(PassportJwtAuthGuard)
@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post()
  create(@Request() req, @Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveriesService.createDelivery(
      req.user.userId,
      createDeliveryDto,
    );
  }
  @Get('assigned')
  findAssignedDeliveries(@Request() req) {
    return this.deliveriesService.findAssignedDeliveries(req.user.userId);
  }
  @Get('/')
  @Get()
  findAllDeliveries() {
    return this.deliveriesService.findAllDeliveries();
  }

  @Get(':id')
  findDelivery(@Request() req, @Param('id') id: string) {
    return this.deliveriesService.findDelivery(req.user.userId, +id);
  }

  @Patch(':id')
  updateDeliveryState(@Param('id') id: string, @Body() state: State) {
    return this.deliveriesService.updateDeliveryState(+id, state);
  }
  @Patch(':id/assign')
  assignDelivery(
    @Param('id') id: string,
    @Body('courierId') courierId: number,
  ) {
    return this.deliveriesService.assignDelivery(+id, courierId);
  }

  @Delete(':id')
  deleteDelivery(@Param('id') id: string) {
    return this.deliveriesService.deleteDelivery(+id);
  }
  @Put(':id')
  updateDeliveryBeforeAssigned(
    @Request() req,
    @Param('id') id: string,
    @Body() updatedDelivery: UpdateDeliveryDto,
  ) {
    return this.deliveriesService.updateDeliveryBeforeAssigned(
      req.user.userId,
      +id,
      updatedDelivery,
    );
  }
}
