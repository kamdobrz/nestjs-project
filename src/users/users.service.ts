import {Injectable} from '@nestjs/common';
import {UserInterface} from '../shared/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import {UserModelDto} from '../dto/videos/users/user.dto';

@Injectable()
export class UsersService {
    private users: UserInterface[] = [];

    public create = async({username, password}: UserModelDto): Promise<boolean> => {
        const user = this.findOne(username);
        if (user) {
            return false;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        this.users.push({
            username,
            userId: Date.now().toString(),
            password: hashedPassword
        });

        return true;
    };

    public findOne = (userName: string): UserInterface =>
        this.users.find(({username}: UserInterface) => username === userName);
}
