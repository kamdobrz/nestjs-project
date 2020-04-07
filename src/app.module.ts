import { Module } from '@nestjs/common';
import { VideosModule } from './videos/videos.module';
import { VideosService } from './videos/videos.service';

@Module({
  imports: [VideosModule],
  controllers: [],
  providers: [VideosService],
})
export class AppModule {}
