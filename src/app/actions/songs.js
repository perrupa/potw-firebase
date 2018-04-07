import {
  LOAD_PLAYLIST,
} from './types'

export default function loadPlaylist(songs) {
  // FireBaseTools.logoutUser(user);
  return {
    type: LOAD_PLAYLIST,
    payload: songs,
  }
}
