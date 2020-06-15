import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {UserModelDto} from '../dto/users/user.dto';
import {AuthInterface, UserValidationInterface} from '../shared/interfaces/auth.interface';
import {UserInterface} from '../shared/interfaces/user.interface';
import {UsersService} from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService
    ) {}

    public async validateUser (userData: UserModelDto): Promise<UserValidationInterface | null> {
        const {username, password: pass} = userData;
        const user = this.userService.findOne(username);
        const isPasswordValid = await bcrypt.compare(pass, user.password);

        if (user && isPasswordValid) {
            const {password, ...result} = user;
            return result;
        }

        return null;
    };

    public register = async(userData: UserModelDto): Promise<boolean> =>
        await this.userService.create(userData);

    public login = ({username, id}: UserInterface): AuthInterface => ({
        accessToken: this.jwtService.sign({username, id})
    })
}
