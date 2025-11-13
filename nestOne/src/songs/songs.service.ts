import { Injectable } from '@nestjs/common';

type Song = {
  id: number;
  name: string;
};

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [
    {
      id: 1,
      name: 'Kutty Story',
    },
    {
      id: 2,
      name: 'Bhalobashbo Bashbore Bondhu',
    },
  ];

  createSong(name: string) {
    const id = this.songs.length + 1;
    const newSong: Song = { id, name };
    this.songs.push(newSong);
    const song = this.songs.find((s) => s.id === id);
    return { message: 'Song added successfully', song };
  }

  findSongs() {
    return this.songs;
  }

  findSongById(id: number) {
    const song = this.songs.find((s) => s.id === id);

    if (!song) {
      return { message: 'Song not found' };
    }

    return song;
  }
}
