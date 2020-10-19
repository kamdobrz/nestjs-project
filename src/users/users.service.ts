import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {AuthCredentialsDto} from '../dto/users/user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from '../schemas/user.schema';
import {Model} from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create({username, password}: AuthCredentialsDto): Promise<User> {
        const user = await this.findOne(username);

        if (user) {
            throw new HttpException('User exists!', HttpStatus.FORBIDDEN);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const createdUser = new this.userModel({
            id: Date.now().toString(),
            password: hashedPassword,
            username
        });

        return createdUser.save();
    }

    public findOne = async(username: string): Promise<UserDocument> =>
        await this.userModel.findOne({username});
}
