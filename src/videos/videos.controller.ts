import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {VideoModelDto} from '../dto/videos/video.dto';
import {VideosDto} from '../dto/videos/videos.dto';
import {VideosService} from './videos.service';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService) {}

    @Get()
    getVideos(): VideosDto {
        return this.videosService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: string): VideoModelDto {
        return this.videosService.find(id);
    }

    @Post()
    create(@Body() video: VideoModelDto): VideoModelDto {
        return this.videosService.create(video);
    }

    @Put()
    update(@Body() video: VideoModelDto): VideoModelDto {
        return this.videosService.update(video);
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        this.videosService.delete(id);
        return id;
    }

}
