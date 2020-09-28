import {IsOptional, IsString} from 'class-validator';

export class VideoModelDto {
    @IsString()
    @IsOptional()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly posterImgUrl: string;

    constructor(video: VideoModelDto) {
        if (!video) {
            return;
        }

        Object.assign(this, video);
    }
}
