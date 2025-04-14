import { Options } from '@nestjs/common';
import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
  Matches,
} from 'class-validator';
import { Match } from 'src/common/decorators/match.decorator';
import { isEmailUnique } from 'src/common/decorators/isEmailUnique.decorator';
import { isNumeroUnique } from 'src/common/decorators/isNumeroUnique.decorator';

export class CreateUtilisateurDto {
  @IsString({ message: 'Veuillez saisir un nom' })
  nom: string;
  @IsString({ message: 'Veuillez saisir un prenom' })
  prenom: string;
  @IsString({ message: 'Veuillez saisir un numéro' })
  @Matches(/^(?:\+216)?[2459]\d{7}$/, {
    message: 'Numéro invalide (ex: +216 XX XXX XXX ou 2/4/5/9XXXXXXXX)',
  })
  @isNumeroUnique('', { message: 'Cet numero est deja pris' })
  numero: string;
  @IsEmail()
  @isEmailUnique('', { message: 'Cet email est deja pris' })
  email: string;
  @IsString({ message: 'Veuillez saisir un mot de passe' })
  @IsNotEmpty({ message: 'Veuillez saisir un mot de passe' })
  motDePass: string;
  @Match('motDePass', { message: 'Veuillez confirmer le mot de passe' })
  confirmationMotDePass: string;
  @IsEnum(Role, { message: 'Le rôle spécifié est invalide' })
  role: Role;
}
