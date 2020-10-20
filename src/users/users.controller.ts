import {Controller, Get, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from '../auth/jwt/jwt-auth.guard';
import {User} from '../helpers/decorators/user.decorator';
import {UserInterface} from '../shared/interfaces/user.interface';

@Controller('users')
export class UsersController {
    @UseGuards(JwtAuthGuard)
    @Get('self')
    public getUser(@User() user: UserInterface) {
        return user;
    }
}
