import { Injectable } from '@nestjs/common';
import { VideoModelDto } from '../dto/videos/video.dto';
import { VideosDto } from '../dto/videos/videos.dto';

@Injectable()
export class VideosService {
    private videos: VideosDto = {
        1: {
            id: '1',
            name: 'First',
            posterImg: ''
        },
        2: {
            id: '2',
            name: 'Second',
            posterImg: ''
        },
        3: {
            id: '3',
            name: 'Third',
            posterImg: ''
        }
    };


    public findAll(): VideosDto {
        return this.videos;
    }

    public create(video: VideoModelDto): VideoModelDto {
        const id = Date.now().toString();
        const createdVideo = new VideoModelDto({...video, id});

        this.videos[id] = createdVideo;
        return createdVideo;
    }

    public find(id: string): VideoModelDto {
        const video = this.videos[id];

        if (!video) {
            throw Error(`No video with ${id} found!`)
        }

        return video;
    }

    public update(video: VideoModelDto) {
        const {id} = video;
        if (!this.videos[id]) {
            throw Error(`No video with ${id} found!`)
        }

        this.videos[id] = video;
        return video;
    }

    public delete(id: string) {
        if (!this.videos[id]) {
            throw Error(`No video with ${id} found!`)
        }

        delete this.videos[id];
    }

}
