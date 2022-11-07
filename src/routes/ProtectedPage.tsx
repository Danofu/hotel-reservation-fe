import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';

import { LOGO_TEXT_LONG } from 'app-constants';

const ProtectedPage = () => (
  <Fragment>
    <Helmet>
      <title>Protected - {LOGO_TEXT_LONG}</title>
    </Helmet>
    <Typography component="h1" m={3} variant="h5">
      Protected Page 😼
    </Typography>
  </Fragment>
);

export default ProtectedPage;
