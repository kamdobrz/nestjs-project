import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {UserInterface} from '../../shared/interfaces/user.interface';

export const User = createParamDecorator(
    (data: UserInterface, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);
