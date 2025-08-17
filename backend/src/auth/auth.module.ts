import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
import { HashService } from './hash/hash.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthRepository } from './repositories/auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportAuthController } from './passport-auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    UserModule,
  ],
  controllers: [PassportAuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AuthService,
    HashService,
    AuthRepository,
    UsersService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthRepository],
})
export class AuthModule {}
