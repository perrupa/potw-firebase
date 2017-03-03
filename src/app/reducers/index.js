import { combineReducers } from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import songs from './songs';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    songs
});

export default rootReducer;
