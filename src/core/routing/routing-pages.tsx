import { lazy } from 'react';

const LayoutPage = lazy(() => import('../../pages/LayoutPage/LayoutPage'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

export { LayoutPage, LoginPage, MainPage, NotFoundPage };
