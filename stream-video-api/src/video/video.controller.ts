import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers, Res, HttpStatus } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { statSync, createReadStream } from 'fs';
import { Response } from 'express';

@Controller('video')
export class VideoController
{
  constructor(private readonly videoService: VideoService) { }


  // @Get('stream/:video')
  // @Header('Accept-Ranges', 'bytes')
  // @Header('Content-Type', 'video/mp4')
  // async getStreamVideo(@Param('video') video: string, @Headers() headers, @Res() res: Response)
  // {
  //   const videoPath = `src/assets/${video}`;
  //   console.log(videoPath);
  //   const { size } = statSync(videoPath);
  //   console.log(size);
  //   const videoRange = headers.range;
  //   console.log(videoRange);
  //   if (videoRange)
  //   {
  //     const parts = videoRange.replace(/bytes=/, "").split("-");
  //     const start = parseInt(parts[0], 10);
  //     const end = parts[1] ? parseInt(parts[1], 10) : size - 1;
  //     const chunksize = (end - start) + 1;
  //     console.log(chunksize);
  //     const readStreamfile = createReadStream(videoPath, { start, end, highWaterMark: 150 });
  //     const head = {
  //       'Content-Range': `bytes ${start}-${end}/${size}`,
  //       'Content-Length': chunksize,
  //     };
  //     res.writeHead(HttpStatus.PARTIAL_CONTENT, head); //206
  //     readStreamfile.pipe(res);
  //   } else
  //   {
  //     const head = {
  //       'Content-Length': size,
  //     };
  //     res.writeHead(HttpStatus.OK, head);//200
  //     createReadStream(videoPath).pipe(res);
  //   }
  // }

  @Get('stream/:video')
  @Header('Accept-Ranges', 'bytes')
  @Header('Content-Type', 'video/mp4')
  async getStreamVideo(@Param('video') video: string, @Headers() headers, @Res() res: Response)
  {
    const videoPath = `src/assets/${video}`;
    console.log(videoPath);

    this.videoService.streamVideo(videoPath, headers, res);
  }


  @Post()
  create(@Body() createVideoDto: CreateVideoDto)
  {
    return this.videoService.create(createVideoDto);
  }

  @Get()
  findAll()
  {
    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string)
  {
    return this.videoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto)
  {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string)
  {
    return this.videoService.remove(+id);
  }
}
