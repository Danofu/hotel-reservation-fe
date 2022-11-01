import { lazy } from 'react';

export const PATH_HOME = '/';
export const PATH_LOGIN = '/login';
export const PATH_PROTECTED = '/protected';

export const LazyAppLayout = lazy(() => import('components/AppLayout'));
export const LazyErrorPage = lazy(() => import('routes/ErrorPage'));
export const LazyIndexPage = lazy(() => import('routes/IndexPage'));
export const LazyLoginPage = lazy(() => import('routes/LoginPage'));
export const LazyProtectedPage = lazy(() => import('routes/ProtectedPage'));
