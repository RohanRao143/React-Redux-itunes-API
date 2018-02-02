import {combineReducers} from 'redux';
import FetchedArtists from './artists-results-itunes'

const allReducers = combineReducers({
    fetchArtists: FetchedArtists,
});

export default allReducers;