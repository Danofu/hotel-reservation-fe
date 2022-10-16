import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';

import AuthorizationForm from 'src/components/AuthorizationForm';
import { AuthorizationFormValues } from 'src/components/AuthorizationForm/types';

const LoginPage = () => {
  const handleSubmit = async (
    values: AuthorizationFormValues,
    formikHelpers: FormikHelpers<AuthorizationFormValues>
  ) => {
    // TODO: make authorize request
    console.log(values);
    await new Promise((r) => setTimeout(r, 10 * 1000));
    formikHelpers.resetForm();
  };

  return (
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
            Authorization 😼
          </Typography>
          <AuthorizationForm onSubmit={handleSubmit} />
        </Stack>
      </Paper>
    </Container>
  );
};

export default LoginPage;
