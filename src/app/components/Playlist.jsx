import React, { Component } from 'react';
import Song from 'components/song/song';

const Playlist = ({ songs, playSong, ...props }) =>
  <div>
    {songs.map(song =>
      <Song
        key={song.id}
        song={song}
        onClick={() => playSong(song.id)}
      />
    )}
  </div>

export default Playlist
