import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthInterface} from '../shared/interfaces/auth.interface';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from './local-auth.guard';
import {User} from '../schemas/user.schema';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    public register(@Body() body): Promise<User> {
        return this.authService.register(body);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Request() req): Promise<AuthInterface> {
        return this.authService.login(req.user);
    }
}
