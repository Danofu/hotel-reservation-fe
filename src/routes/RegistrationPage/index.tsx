import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
      <Container
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          py: 3,
          textAlign: 'center',
        }}
      >
        <Paper elevation={3} sx={{ px: 5, py: 4, width: 600 }}>
          <Stack spacing={6}>
            <Typography component="h1" variant="h5">
              {t(`${TPATH}.heading`)}
            </Typography>
            <RegistrationForm onSubmit={() => undefined} />
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default RegistrationPage;
