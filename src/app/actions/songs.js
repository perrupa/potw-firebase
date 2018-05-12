import { LOAD_PLAYLIST, PLAY_SONG } from "./types";

export function loadPlaylist(songs) {
  // FireBaseTools.logoutUser(user);
  return {
    type: LOAD_PLAYLIST,
    payload: songs
  };
}

export function playSong(songID) {
  return {
    type: PLAY_SONG,
    payload: songID
  };
}
