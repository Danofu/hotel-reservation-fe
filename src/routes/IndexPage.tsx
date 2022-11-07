import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';

import { LOGO_TEXT_LONG } from 'app-constants';

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <title>Home - {LOGO_TEXT_LONG}</title>
    </Helmet>
    <Typography component="h1" m={3} variant="h5">
      Home Page 😼
    </Typography>
  </Fragment>
);

export default IndexPage;
