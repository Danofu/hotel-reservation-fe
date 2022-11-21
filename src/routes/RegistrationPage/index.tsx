import Container from '@mui/material/Container';
import React from 'react';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import InnerRegistrationForm from 'components/forms/RegistrationForm/InnerRegistrationForm';
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
        <Formik
          component={InnerRegistrationForm}
          initialValues={{ email: '', password: '', 'confirm-password': '', 'family-name': '', 'given-name': '' }}
          onSubmit={() => undefined}
        />
      </Container>
    </>
  );
};

export default RegistrationPage;
