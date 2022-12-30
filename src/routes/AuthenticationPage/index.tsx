import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React, { Fragment, useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AuthenticationForm, { IAuthenticationFormValues } from 'components/forms/AuthenticationForm';
import { AuthContext } from 'providers/AuthProvider';
import { LOGO_TEXT_LONG } from 'app-globals';
import { TPATH } from 'routes/AuthenticationPage/constants';

const AuthenticationPage = () => {
  const navigate = useNavigate();
  const { isAuthorized, login } = useContext(AuthContext);
  const { search: rawSearch } = useLocation();
  const { t } = useTranslation();

  const handleSubmit = async (
    values: IAuthenticationFormValues,
    formikHelpers: FormikHelpers<IAuthenticationFormValues>
  ) => {
    const { email, password, remember } = values;
    const result = await login(email, password, remember);

    !result && toast.error(t(`${TPATH}.toast.failure`));
    formikHelpers.setSubmitting(false);
  };

  useEffect(() => {
    const search = new URLSearchParams(rawSearch);
    const navigateUrl = decodeURI(search.get('callbackUrl') ?? '/');

    isAuthorized && navigate(navigateUrl, { replace: true });
  }, [isAuthorized, rawSearch]);

  return (
    <Fragment>
      <Helmet>
        <title>{t(`${TPATH}.title`, { textLogo: LOGO_TEXT_LONG })}</title>
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
        }}
      >
        <Paper elevation={3} sx={{ px: 5, py: 4, width: 600 }}>
          <Stack spacing={6}>
            <Typography component="h1" variant="h5">
              {t(`${TPATH}.heading`)}
            </Typography>
            <AuthenticationForm onSubmit={handleSubmit} />
          </Stack>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default AuthenticationPage;
