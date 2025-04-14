import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { isEmailUniqueConstraint } from '../validators/is-unique.validator';

export function isEmailUnique(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isEmailUnique',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: isEmailUniqueConstraint,
    });
  };
}
