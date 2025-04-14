import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';

import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { DemandeModule } from './demande/demande.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import {
  isEmailUniqueConstraint,
  isNumberUniqueConstraint,
} from './common/validators/is-unique.validator';
import { ValidatorsModule } from './common/validators/validators.module';

@Module({
  imports: [
    DatabaseModule,
    UtilisateurModule,
    DemandeModule,
    AuthModule,
    ValidatorsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AuthService,
    isEmailUniqueConstraint,
    isNumberUniqueConstraint,
  ],
})
export class AppModule {}
