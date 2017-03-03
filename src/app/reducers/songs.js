// Songs reducer
import { LOAD_PLAYLIST } from '../actions/songs';

const defaultPlaylist = [
  { artist: 'Duke Hugh', title: 'Your Number', youtubeID: 'ydmCCSWiEu4' },
  { artist: 'Todd Terje', title: 'Delorean Dynamite', youtubeID: 'LUOIvT9hzD8' },
];

export default function (state = defaultPlaylist, action) {
    switch (action.type) {
    case LOAD_PLAYLIST:
        return action.payload;
    // case LOAD_PLAYLIST:
    //     return action.payload;
    default:
        return state;
    }
}
