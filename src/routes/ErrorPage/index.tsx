import Box from '@mui/material/Box';
import React, { Fragment } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import { Trans, useTranslation } from 'react-i18next';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import Link from 'components/utils/Link';
import { LOGO_TEXT_LONG, PATHNAME_HOME, PATHNAME_LOGIN } from 'app-globals';
import { TPATH } from 'routes/ErrorPage/constants';

const ErrorPage = () => {
  const { t } = useTranslation();
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error)
    ? [`${TPATH}.description.${error.status}`, `${TPATH}.description.unspecific`]
    : `${TPATH}.description.unspecific`;

  const errorTitle = isRouteErrorResponse(error)
    ? [`${TPATH}.title.${error.status}`, `${TPATH}.title.unspecific`]
    : `${TPATH}.title.unspecific`;

  return (
    <Fragment>
      <Helmet>
        <title>{t(errorTitle, { textLogo: LOGO_TEXT_LONG })}</title>
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
            {t(`${TPATH}.heading`)}
          </Typography>
          <Typography component="h2" variant="h5">
            {t(errorText)}
          </Typography>
          <Typography component="p" variant="body1">
            <Trans i18nKey={`${TPATH}.suggestion`}>
              Try our&nbsp;
              <Link to={PATHNAME_HOME} underline="hover">
                home
              </Link>
              &nbsp;or&nbsp;
              <Link to={PATHNAME_LOGIN} underline="hover">
                login
              </Link>
              &nbsp;page
            </Trans>
          </Typography>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default ErrorPage;
