import {
  LOAD_PLAYLIST,
} from './types';

export function loadPlaylist(songs) {
  const request = FireBaseTools.logoutUser(user);
  return {
    type: LOAD_PLAYLIST,
    payload: songs,
  };
}
