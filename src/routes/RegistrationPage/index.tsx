import Container from '@mui/material/Container';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import RegistrationForm from 'components/forms/RegistrationForm';
import { LOGO_TEXT_LONG } from 'app-globals';
import { TPATH } from 'routes/RegistrationPage/constants';

const RegistrationPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(`${TPATH}.title`, { textLogo: LOGO_TEXT_LONG })}</title>
      </Helmet>
      <Container sx={{ py: 3 }}>
        <RegistrationForm onSubmit={() => undefined} />
      </Container>
    </>
  );
};

export default RegistrationPage;
