import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DemolitionPage } from './pages/DemolitionPage';
import { ExcavationPage } from './pages/ExcavationPage';
import { DebrisPage } from './pages/DebrisPage';
import { InteriorDemolitionPage } from './pages/InteriorDemolitionPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'buracie-prace', Component: InteriorDemolitionPage },
      { path: 'demolacie', Component: DemolitionPage },
      { path: 'vykopove-prace', Component: ExcavationPage },
      { path: 'odvoz-sutiny', Component: DebrisPage },
    ],
  },
]);
