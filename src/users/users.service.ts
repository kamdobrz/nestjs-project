import {Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {AuthCredentialsDto} from '../dto/users/user.dto';
import {UserInterface} from '../shared/interfaces/user.interface';

@Injectable()
export class UsersService {
    private users: UserInterface[] = [];

    public create = async({username, password}: AuthCredentialsDto): Promise<boolean> => {
        const user = this.findOne(username);
        if (user) {
            return false;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        this.users.push({
            id: Date.now().toString(),
            password: hashedPassword,
            username
        });

        return true;
    };

    public findOne = (username: string): UserInterface =>
        this.users.find((user: UserInterface) => user.username === username);
}
