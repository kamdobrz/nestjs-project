import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
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
    find(@Param('id') id: string) {
        return this.videosService.find(id);
    }

    @Post()
    create(@Body() VideoModelDto: VideoModelDto) {
        this.videosService.create(VideoModelDto);
        return VideoModelDto;
    }

    @Put()
    update(@Body() VideoModelDto: VideoModelDto) {
        this.videosService.update(VideoModelDto);
        return VideoModelDto;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.videosService.delete(id);
        return id;
    }

}
