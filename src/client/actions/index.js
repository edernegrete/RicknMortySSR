import axios from 'axios';

export const FETCH_CHARACTERS = 'fetch_characters';

export const fetchCharacters = url => async (dispatch) => {
  const res = await axios.get(url || 'https://rickandmortyapi.com/api/character/');
  dispatch({
    type: FETCH_CHARACTERS,
    payload: res,
  });
};

export const FETCH_EPISODES = 'fetch_episodes';

export const fetchEpisodes = url => async (dispatch) => {
  const res = await axios.get(url || 'https://rickandmortyapi.com/api/episode/');
  dispatch({
    type: FETCH_EPISODES,
    payload: res,
  });
};

export const FETCH_PLANETS = 'fetch_planets';

export const fetchPlanets = url => async (dispatch) => {
  const res = await axios.get(url || 'https://rickandmortyapi.com/api/location/');
  dispatch({
    type: FETCH_PLANETS,
    payload: res,
  });
};
