import {UserValidationInterface} from './auth.interface';

export interface UserInterface extends UserValidationInterface{
    password: string
}
