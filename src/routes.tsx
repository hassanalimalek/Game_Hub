import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layout';
import Homepage from './pages/Homepage';
import GameDetailPage from './pages/GameDetailPage';
import Error from './components/Error';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/game/:id',
        element: <GameDetailPage />,
      },
    ],
  },
]);
