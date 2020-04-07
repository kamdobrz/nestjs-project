import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from './local-auth.guard';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    public register(@Request() req) {
        return this.authService.register(req.body);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
