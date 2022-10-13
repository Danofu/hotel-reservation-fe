import React, { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError();

  return <h1>{isRouteErrorResponse(error) ? `${error.status}: ${error.statusText}` : 'Oops...'}</h1>;
};

export default ErrorPage;
