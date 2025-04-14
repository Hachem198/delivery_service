import { registerDecorator, ValidationOptions } from 'class-validator';
import { isNumberUniqueConstraint } from '../validators/is-unique.validator';

export function isNumeroUnique(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
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
