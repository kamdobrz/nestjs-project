import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from '../auth/jwt/jwt-auth.guard';

@Controller('users')
export class UsersController {

    @UseGuards(JwtAuthGuard)
    @Get('self')
    public getUser(@Request() req) {
        return req.user;
    }
}
