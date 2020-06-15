import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {VideosModule} from './videos/videos.module';

@Module({
    imports: [VideosModule, AuthModule, UsersModule]
})
export class AppModule {}
