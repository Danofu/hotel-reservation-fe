import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoadingBackdrop from 'components/LoadingBackdrop';
import ProtectedRoutes from 'utils/ProtectedRoutes';
import Suspense from 'utils/Suspense';
import {
  LazyAppLayout,
  LazyErrorPage,
  LazyIndexPage,
  LazyLoginPage,
  LazyProtectedPage,
  PATH_HOME,
  PATH_LOGIN,
  PATH_PROTECTED,
} from 'routes/constants';

export default createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <Suspense component={<LazyProtectedPage />} fallback={<LoadingBackdrop />} />,
            path: PATH_PROTECTED,
          },
        ],
        element: <Suspense component={<LazyAppLayout />} fallback={<LoadingBackdrop />} />,
      },
    ],
    element: <ProtectedRoutes />,
    errorElement: <Suspense component={<LazyErrorPage />} fallback={<LoadingBackdrop />} />,
    path: PATH_HOME,
  },
  {
    children: [{ element: <Suspense component={<LazyIndexPage />} fallback={<LoadingBackdrop />} />, index: true }],
    element: <Suspense component={<LazyAppLayout />} fallback={<LoadingBackdrop />} />,
    path: PATH_HOME,
  },
  {
    element: <Suspense component={<LazyLoginPage />} fallback={<LoadingBackdrop />} />,
    path: PATH_LOGIN,
  },
]);
