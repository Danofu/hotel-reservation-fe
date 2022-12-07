import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import { Helmet } from 'react-helmet';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import RegistrationForm, { IRegistrationFormValues } from 'components/forms/RegistrationForm';
import { LOGO_TEXT_LONG, PATHNAME_LOGIN } from 'app-globals';
import { TPATH } from 'routes/RegistrationPage/constants';
import { registerUser } from 'utils';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (
    values: IRegistrationFormValues,
    formikHelpers: FormikHelpers<IRegistrationFormValues>
  ) => {
    try {
      const response = await registerUser(values);

      formikHelpers.setSubmitting(false);

      if (response.statusText !== 'OK') {
        toast.error(t(`${TPATH}.toast.failure`));
        return;
      }

      toast.success(t(`${TPATH}.toast.success`));
      navigate(PATHNAME_LOGIN);
    } catch (err) {
      console.error(err);
      toast.error(t(`${TPATH}.toast.failure`));

      if (isAxiosError(err)) {
        if (err.response?.statusText === 'Forbidden') {
          formikHelpers.setFieldError('email', t(`${TPATH}.form-errors.email.duplicate`));
        }
      }
    }
  };

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
            <RegistrationForm onSubmit={handleSubmit} />
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default RegistrationPage;
