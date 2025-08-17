import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';
import { Match } from 'src/common/decorators/match.decorator';
import { isEmailUnique } from 'src/common/decorators/isEmailUnique.decorator';
import { isNumberUnique } from 'src/common/decorators/isNumberUnique.decorator';

export class CreateUserDto {
  @IsString({ message: 'Please enter a first name' })
  firstName: string;

  @IsString({ message: 'Please enter a last name' })
  lastName: string;

  @IsString({ message: 'Please enter a phone number' })
  @Matches(/^(?:\+216)?[2459]\d{7}$/, {
    message: 'Invalid number (e.g., +216 XX XXX XXX or 2/4/5/9XXXXXXXX)',
  })
  @isNumberUnique('', { message: 'This number is already taken' })
  number: string;

  @IsEmail({}, { message: 'Please enter a valid email address' })
  @isEmailUnique('', { message: 'This email is already taken' })
  email: string;

  @IsString({ message: 'Please enter a password' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;

  @Match('password', { message: 'Passwords do not match' })
  confirmPassword: string;

  @IsEnum(Role, { message: 'The specified role is invalid' })
  role: Role;
}
