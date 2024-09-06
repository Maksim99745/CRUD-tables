import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LayoutPage, LoginPage, MainPage, NotFoundPage } from './routing-pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<CircularProgress />}>
        <LayoutPage />
      </Suspense>
    ),
    children: [
      {
        path: '/main',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<CircularProgress />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<CircularProgress />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);
