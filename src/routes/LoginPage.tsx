import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React, { useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthenticationForm from 'components/AuthenticationForm';
import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { IValues } from 'components/AuthenticationForm/types';
import { LOGO_TEXT_LONG } from 'app-constants';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthorized, login } = useContext(AuthorizationContext);
  const { search: rawSearch } = useLocation();

  const handleSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
    const { email, password, remember } = values;
    const result = await login(email, password, remember);

    formikHelpers.setSubmitting(false);

    if (result) {
      toast.success('Authorization Succeeded');
      return;
    }

    toast.error('Authorization Failed');
  };

  useEffect(() => {
    const search = new URLSearchParams(rawSearch);
    const navigateUrl = decodeURI(search.get('callbackUrl') ?? '/');

    isAuthorized && navigate(navigateUrl, { replace: true });
  }, [isAuthorized, rawSearch]);

  return (
    <>
      <Helmet>
        <title>Login - {LOGO_TEXT_LONG}</title>
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
        <Paper elevation={3} sx={{ px: 5, py: 4, width: 500 }}>
          <Stack spacing={6}>
            <Typography align="center" component="h1" variant="h5">
              Authentication 😼
            </Typography>
            <AuthenticationForm onSubmit={handleSubmit} />
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
