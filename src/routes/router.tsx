import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoadingBackdrop from 'components/LoadingBackdrop';
import ProtectedRoutes from 'components/utils/ProtectedRoutes';
import Suspense from 'components/utils/Suspense';
import { LazyAppLayout, LazyErrorPage, LazyIndexPage, LazyLoginPage, LazyProtectedPage } from 'routes/constants';
import { PATHNAME_HOME, PATHNAME_LOGIN, PATHNAME_PROTECTED } from 'app-constants';

export default createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <Suspense Component={LazyProtectedPage} fallback={<LoadingBackdrop />} />,
            path: PATHNAME_PROTECTED,
          },
        ],
        element: <Suspense Component={LazyAppLayout} fallback={<LoadingBackdrop />} />,
      },
    ],
    element: <ProtectedRoutes />,
    errorElement: <Suspense Component={LazyErrorPage} fallback={<LoadingBackdrop />} />,
    path: PATHNAME_HOME,
  },
  {
    children: [{ element: <Suspense Component={LazyIndexPage} fallback={<LoadingBackdrop />} />, index: true }],
    element: <Suspense Component={LazyAppLayout} fallback={<LoadingBackdrop />} />,
    path: PATHNAME_HOME,
  },
  {
    element: <Suspense Component={LazyLoginPage} fallback={<LoadingBackdrop />} />,
    path: PATHNAME_LOGIN,
  },
]);
