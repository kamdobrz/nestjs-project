import {IsString} from 'class-validator';

export class UserModelDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;
}
