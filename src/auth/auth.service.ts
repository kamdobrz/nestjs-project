import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {UserInterface} from '../shared/interfaces/user.interface';
import {JwtService} from '@nestjs/jwt';
import {UserModelDto} from '../dto/users/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService
    ) {}

    public validateUser = async(userData: UserModelDto): Promise<Partial<UserInterface> | null> => {
        const {username, password: pass} = userData;
        const user = this.userService.findOne(username);

        if (user && await bcrypt.compare(pass, user.password)) {
            const {password, ...result} = user;
            return result;
        }

        return null;
    };

    public register = async(userData: UserModelDto): Promise<boolean> =>
        await this.userService.create(userData);

    public login = ({username, userId}: UserInterface) => ({
        accessToken: this.jwtService.sign({username, userId})
    })
}
