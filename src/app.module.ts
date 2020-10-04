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
        MongooseModule.forRoot(
            `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}<dbname>?retryWrites=true&w=majority`
        )
    ]
})

export class AppModule {}
