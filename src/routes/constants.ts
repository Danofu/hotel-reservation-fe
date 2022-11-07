import { lazy } from 'react';

export const LazyAppLayout = lazy(() => import('components/AppLayout'));
export const LazyErrorPage = lazy(() => import('routes/ErrorPage'));
export const LazyIndexPage = lazy(() => import('routes/IndexPage'));
export const LazyLoginPage = lazy(() => import('routes/LoginPage'));
export const LazyProtectedPage = lazy(() => import('routes/ProtectedPage'));
