import { registerDecorator, ValidationOptions } from 'class-validator';
import { isNumberUniqueConstraint } from '../validators/is-unique.validator';

export function isNumberUnique(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNumeroUnique',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: isNumberUniqueConstraint,
    });
  };
}
