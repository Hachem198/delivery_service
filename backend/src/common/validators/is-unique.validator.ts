import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
// Email custom validator : To verify if the email is already used
@ValidatorConstraint({ async: true })
@Injectable()
export class isEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly databaseService: DatabaseService) {}
  async validate(email: string): Promise<boolean> {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });
    return !user;
  }
  defaultMessage(): string {
    return 'Email already exists!';
  }
}
// Numero custom validator : To verify if the number is already used
@ValidatorConstraint({ async: true })
@Injectable()
export class isNumberUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly databaseService: DatabaseService) {}
  async validate(number: string): Promise<boolean> {
    const user = await this.databaseService.user.findUnique({
      where: { number },
    });
    return !user;
  }
  defaultMessage(): string {
    return 'Number already exists!';
  }
}
