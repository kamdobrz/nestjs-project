import {IsOptional, IsString} from 'class-validator';
import {VideoInterface} from '../../shared/interfaces/video.interface';

export class VideoModelDto {
    @IsString()
    @IsOptional()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly posterImg: string;

    constructor(video: VideoInterface) {
        if (!video) {
            return;
        }

        const {id, name, posterImg} = video;
        this.id = id;
        this.name = name;
        this.posterImg = posterImg;
    }
}
