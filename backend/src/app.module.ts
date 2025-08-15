import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { PassportAuthController } from './auth/passport-auth.controller';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import {
  isEmailUniqueConstraint,
  isNumberUniqueConstraint,
} from './common/validators/is-unique.validator';
import { ValidatorsModule } from './common/validators/validators.module';
import { HashService } from './auth/hash/hash.service';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    ValidatorsModule,
    DeliveriesModule,
  ],
  controllers: [AppController, PassportAuthController],
  providers: [
    AppService,
    AuthService,
    isEmailUniqueConstraint,
    isNumberUniqueConstraint,
    HashService,
  ],
})
export class AppModule {}
