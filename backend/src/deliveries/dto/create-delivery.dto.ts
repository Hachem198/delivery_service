import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeliveryDto {
  @IsString()
  @IsNotEmpty()
  pickUpLocation: string;

  @IsString()
  @IsNotEmpty()
  dropOffLocation: string;

  @IsString()
  @IsNotEmpty()
  pickUpDate: string;

  @IsString()
  @IsNotEmpty()
  service: string;

  @IsString()
  @IsNotEmpty()
  productType: string;
}
