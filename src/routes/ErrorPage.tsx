import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import { isRouteErrorResponse, Link as RouterLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'Sorry, an unexpected error has occurred.';

  return (
    <>
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <Container
        maxWidth={false}
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
            <Link component={RouterLink} to="/" underline="hover">
              home
            </Link>
            &nbsp;or&nbsp;
            <Link component={RouterLink} to="login" underline="hover">
              login
            </Link>
            &nbsp;page
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default ErrorPage;