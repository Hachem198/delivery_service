import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import {
  isEmailUniqueConstraint,
  isNumberUniqueConstraint,
} from './is-unique.validator';

@Module({
  imports: [DatabaseModule],
  providers: [isEmailUniqueConstraint, isNumberUniqueConstraint],
  exports: [isEmailUniqueConstraint, isNumberUniqueConstraint],
})
export class ValidatorsModule {}
