import { SongsService } from './songs.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  createSong(@Body('name') name: string) {
    return this.songsService.createSong(name);
  }

  @Get('error')
  error() {
    throw new HttpException(
      'internal server error',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  } //! getting server error

  @Get()
  getSongs() {
    return this.songsService.findSongs();
  }

  @Get(':id')
  getSongById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.songsService.findSongById(id);
  }
}
