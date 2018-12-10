import App from './App';
import Home from './pages/HomePage';
import CharactersList from './pages/CharactersListPage';
import EpisodesList from './pages/EpisodesListPage';
import PlanetsList from './pages/PlanetsListPage';
import NotFound from './pages/NotFound';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...EpisodesList,
        path: '/episodes',
      },
      {
        ...CharactersList,
        path: '/characters',
      },
      {
        ...PlanetsList,
        path: '/planets',
      },
      {
        ...NotFound,
      },
    ],
  },
];
