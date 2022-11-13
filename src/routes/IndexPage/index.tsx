import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { LOGO_TEXT_LONG } from 'app-constants';
import { TPATH } from 'routes/IndexPage/constants';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Helmet>
        <title>{t(`${TPATH}.title`, { textLogo: LOGO_TEXT_LONG })}</title>
      </Helmet>
      <Typography component="h1" m={3} variant="h5">
        {t(`${TPATH}.heading`)}
      </Typography>
    </Fragment>
  );
};

export default IndexPage;
