export default (action, state, type) => ({
  ...state,
  [type]: state[type].concat(action.payload.data.results),
  info: action.payload.data.info,
  hasMore: action.payload.data.info.next !== '',
});
