import { FETCH_EPISODES } from '../actions';
import parser from './stateParser';

const initialState = {
  episodesList: [],
  info: [],
  hasMore: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return parser(action, state, 'episodesList');
    default:
      return state;
  }
};
