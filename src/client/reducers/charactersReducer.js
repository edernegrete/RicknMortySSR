import { FETCH_CHARACTERS } from '../actions';
import parser from './stateParser';

const initialState = {
  charactersList: [],
  info: [],
  hasMore: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return parser(action, state, 'charactersList');
    default:
      return state;
  }
};
