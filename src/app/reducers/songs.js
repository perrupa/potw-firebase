// Songs reducer
import { LOAD_PLAYLIST } from "actions/types";

const defaultPlaylist = [
  { id:0, artist: "No playlist specified", title: "-", youtubeID: null },
];

export default function(state = defaultPlaylist, action) {
  switch (action.type) {
    case LOAD_PLAYLIST:
      return action.payload;
    default:
      return state;
  }
}
