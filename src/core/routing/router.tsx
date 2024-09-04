import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, MainPage, NotFoundPage } from './routing-pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<CircularProgress />}>
        <MainPage />
      </Suspense>
    ),
    children: [],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<CircularProgress />}>
        <LoginPage />
      </Suspense>
    ),
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
