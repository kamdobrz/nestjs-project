import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {VideosModule} from './videos/videos.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports: [
        VideosModule,
        AuthModule,
        UsersModule,
        MongooseModule.forRoot(`${process.env.MONGO_URI}`)
    ]
})

export class AppModule {}
