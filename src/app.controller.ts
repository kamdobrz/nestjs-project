import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './auth/auth.service';
import {LocalAuthGuard} from './auth/local-auth.guard';
import {JwtAuthGuard} from './auth/jwt-auth.guard';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Post('auth/register')
    public register(@Request() req) {
        return this.authService.register(req.body);
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    public async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    public getUser(@Request() req) {
        return req.user;
    }
}
