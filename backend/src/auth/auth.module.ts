import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
import { HashService } from './hash/hash.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthRepository } from './repositories/auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportAuthController } from './passport-auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

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
    AuthService,
    HashService,
    AuthRepository,
    UserService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthRepository],
})
export class AuthModule {}
