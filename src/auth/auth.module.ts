import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './local-strategy';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategy} from './jwt/jwt-strategy';
import {UsersModule} from '../users/users.module';
import {AuthController} from './auth.controller';

@Module({
    exports: [AuthService],
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '60s'}
    })],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
