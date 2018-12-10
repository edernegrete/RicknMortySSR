import { FETCH_PLANETS } from '../actions';
import parser from './stateParser';

const initialState = {
  planetsList: [],
  info: [],
  hasMore: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return parser(action, state, 'planetsList');
    default:
      return state;
  }
};
