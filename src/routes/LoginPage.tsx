import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthorizationForm from 'src/components/AuthenticationForm';
import sleep from 'src/utils/sleep';
import { AuthenticationFormValues } from 'src/components/AuthenticationForm/types';

const LoginPage = () => {
  const navigate = useNavigate();
  const { search: rawSearch } = useLocation();

  const search = new URLSearchParams(rawSearch);

  const handleSubmit = async (
    values: AuthenticationFormValues,
    formikHelpers: FormikHelpers<AuthenticationFormValues>
  ) => {
    // NOTE: fake request
    await sleep(2 * 1000);

    formikHelpers.setSubmitting(false);
    const { email, password, remember } = values;

    if (email === 'danofu13@gmail.com' && password === '752984136') {
      const storage = remember ? localStorage : sessionStorage;

      toast.success('Authorization Succeeded');
      storage.setItem('user.token', 'mock-token');
      navigate(search.has('callback-pathname') ? (search.get('callback-pathname') as string) : '/');

      return;
    }

    toast.error('Authorization Failed');
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
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
          width: 1,
        }}
      >
        <Paper elevation={3} sx={{ px: 5, py: 4, width: 500 }}>
          <Stack spacing={6}>
            <Typography align="center" component="h1" variant="h5">
              Authentication 😼
            </Typography>
            <AuthorizationForm onSubmit={handleSubmit} />
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
