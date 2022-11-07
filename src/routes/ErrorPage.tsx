import Box from '@mui/material/Box';
import React, { Fragment } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import Link from 'components/utils/Link';
import { LOGO_TEXT_LONG, PATHNAME_HOME, PATHNAME_LOGIN } from 'app-constants';

const ErrorPage = () => {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'Sorry, an unexpected error has occurred.';

  const errorTitle = isRouteErrorResponse(error) ? error.status.toString() : 'Error';

  return (
    <Fragment>
      <Helmet>
        <title>
          {errorTitle} - {LOGO_TEXT_LONG}
        </title>
      </Helmet>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          py: 3,
          textAlign: 'center',
          width: 1,
        }}
      >
        <Stack spacing={3}>
          <Typography component="h1" variant="h4">
            Oops... Something went wrong !
          </Typography>
          <Typography component="h2" variant="h5">
            {errorText}
          </Typography>
          <Typography component="p" variant="body1">
            Try our&nbsp;
            <Link to={PATHNAME_HOME} underline="hover">
              home
            </Link>
            &nbsp;or&nbsp;
            <Link to={PATHNAME_LOGIN} underline="hover">
              login
            </Link>
            &nbsp;page
          </Typography>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default ErrorPage;
