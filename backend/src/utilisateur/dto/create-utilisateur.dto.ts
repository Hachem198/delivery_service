import { Options } from '@nestjs/common';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateUtilisateurDto {
  @IsString({ message: 'Veuillez saisir un nom' })
  nom: string;
  @IsString({ message: 'Veuillez saisir un prenom' })
  prenom: string;
  @IsNumber({}, { message: 'Veuillez saisir un numero' })
  numero: number;
  @IsEmail()
  email: string;
}
