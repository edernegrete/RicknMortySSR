import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import episodesReducer from './episodesReducer';
import planetsReducer from './planetsReducer';

export default combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  planets: planetsReducer,
});
