import {Module} from '@nestjs/common';
import {VideosModule} from './videos/videos.module';
import {VideosService} from './videos/videos.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {AppController} from './app.controller';

@Module({
    imports: [VideosModule, AuthModule, UsersModule],
    controllers: [AppController],
    providers: [VideosService]
})
export class AppModule {}
