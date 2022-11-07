import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoadingBackdrop from 'components/LoadingBackdrop';
import ProtectedRoutes from 'utils/ProtectedRoutes';
import Suspense from 'utils/Suspense';
import { LazyAppLayout, LazyErrorPage, LazyIndexPage, LazyLoginPage, LazyProtectedPage } from 'routes/constants';
import { PATHNAME_HOME, PATHNAME_LOGIN, PATHNAME_PROTECTED } from 'app-constants';

export default createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <Suspense component={<LazyProtectedPage />} fallback={<LoadingBackdrop />} />,
            path: PATHNAME_PROTECTED,
          },
        ],
        element: <Suspense component={<LazyAppLayout />} fallback={<LoadingBackdrop />} />,
      },
    ],
    element: <ProtectedRoutes />,
    errorElement: <Suspense component={<LazyErrorPage />} fallback={<LoadingBackdrop />} />,
    path: PATHNAME_HOME,
  },
  {
    children: [{ element: <Suspense component={<LazyIndexPage />} fallback={<LoadingBackdrop />} />, index: true }],
    element: <Suspense component={<LazyAppLayout />} fallback={<LoadingBackdrop />} />,
    path: PATHNAME_HOME,
  },
  {
    element: <Suspense component={<LazyLoginPage />} fallback={<LoadingBackdrop />} />,
    path: PATHNAME_LOGIN,
  },
]);
