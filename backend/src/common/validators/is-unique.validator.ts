import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
// Email custom validator : To verify if the email is already used
@ValidatorConstraint({ async: true })
@Injectable()
export class isEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly databaseService: DatabaseService) {}
  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    const utilisateur = await this.databaseService.utilisateur.findUnique({
      where: { email },
    });
    return !utilisateur;
  }
  defaultMessage(args: ValidationArguments): string {
    return 'Email already exists!';
  }
}
// Numero custom validator : To verify if the number is already used
@ValidatorConstraint({ async: true })
@Injectable()
export class isNumberUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly databaseService: DatabaseService) {}
  async validate(numero: string, args: ValidationArguments): Promise<boolean> {
    const utilisateur = await this.databaseService.utilisateur.findUnique({
      where: { numero },
    });
    return !utilisateur;
  }
  defaultMessage(args: ValidationArguments): string {
    return 'Number already exists!';
  }
}
