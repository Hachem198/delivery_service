import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateDemandeDto {
  @IsString()
  pickUpLocation: string;
  @IsString()
  destLocation: string;
  @IsDate()
  pickUpDate: Date;
  @IsString()
  service: string;
  @IsString()
  typeProduit: string;
  @IsString()
  etatColis: string;
  @IsNumber()
  clientid: number;
}
