import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { createReadStream, statSync } from 'fs';
import { Response } from 'express';

@Injectable()
export class VideoService
{


  async streamVideo(videoPath: string, headers: any, res: Response)
  {
    const { size } = statSync(videoPath);
    const videoRange = headers.range;

    if (videoRange)
    {
      const parts = videoRange.replace(/bytes=/, '').split('-');
      // const start = parseInt(parts[0, 10]);
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : size - 1;
      const chunkSize = end - start + 1;

      const readStreamFile = createReadStream(videoPath, { start, end, highWaterMark: 64 * 1024 });

      console.log(chunkSize);
      const head = {
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Content-Length': chunkSize,
      };

      res.writeHead(206, head); // 206 Partial Content
      readStreamFile.pipe(res);
    } else
    {
      const head = {
        'Content-Length': size,
      };

      res.writeHead(200, head); // 200 OK
      createReadStream(videoPath).pipe(res);
    }
  }

  create(createVideoDto: CreateVideoDto)
  {
    return 'This action adds a new video';
  }

  findAll()
  {
    return `This action returns all video`;
  }

  findOne(id: number)
  {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto)
  {
    return `This action updates a #${id} video`;
  }

  remove(id: number)
  {
    return `This action removes a #${id} video`;
  }
}
