import { lazy } from 'react';

export const LazyAppLayout = lazy(() => import('components/AppLayout'));
export const LazyAuthenticationPage = lazy(() => import('routes/AuthenticationPage'));
export const LazyErrorPage = lazy(() => import('routes/ErrorPage'));
export const LazyHomePage = lazy(() => import('routes/HomePage'));
export const LazyProtectedPage = lazy(() => import('routes/ProtectedPage'));
export const LazyRegistrationPage = lazy(() => import('routes/RegistrationPage'));
