import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {VideoModelDto} from '../dto/videos/video.dto';
import {VideosService} from './videos.service';
import {VideosDto} from '../dto/videos/videos.dto';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService) {}

    @Get()
    index(): VideosDto {
        return this.videosService.findAll() ;
    }

    @Get(':id')
    find(@Param('id') id: string): VideoModelDto {
        return this.videosService.find(id);
    }

    @Post()
    create(@Body() video: VideoModelDto): VideoModelDto {
        const createdVideo = this.videosService.create(video);
        return createdVideo;
    }

    @Put()
    update(@Body() video: VideoModelDto): VideoModelDto {
        const createdVideo = this.videosService.update(video);
        return createdVideo;
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        this.videosService.delete(id);
        return id;
    }

}
