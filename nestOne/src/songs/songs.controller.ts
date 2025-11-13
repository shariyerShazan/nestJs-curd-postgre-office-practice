import { SongsService } from './songs.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  createSong(@Body('name') name: string) {
    return this.songsService.createSong(name);
  }

  @Get()
  getSongs() {
    return this.songsService.findSongs();
  }

  @Get(':id')
  getSongById(@Param('id') id: string) {
    return this.songsService.findSongById(Number(id));
  }
}
