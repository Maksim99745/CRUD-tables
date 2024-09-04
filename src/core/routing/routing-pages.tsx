import { lazy } from 'react';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

export { LoginPage, MainPage, NotFoundPage };
