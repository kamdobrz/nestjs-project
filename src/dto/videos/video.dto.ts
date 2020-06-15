import {IsOptional, IsString} from 'class-validator';
import {VideoInterface} from '../../shared/interfaces/video.interface';

export class VideoModelDto {
    @IsString()
    @IsOptional()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly posterImgUrl: string;

    constructor(video: VideoInterface) {
        if (!video) {
            return;
        }

        const {id, name, posterImgUrl} = video;
        this.id = id;
        this.name = name;
        this.posterImgUrl = posterImgUrl;
    }
}
