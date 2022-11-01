import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React, { useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthenticationForm from 'components/AuthenticationForm';
import { AuthorizationContext, IAuthorizationContext } from 'providers/AuthorizationProvider';
import { IValues } from 'components/AuthenticationForm/types';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthorized, login } = useContext<IAuthorizationContext>(AuthorizationContext);
  const { search: rawSearch } = useLocation();

  const search = new URLSearchParams(rawSearch);
  const navigateUrl = decodeURI(search.get('callbackUrl') ?? '/');

  const handleSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
    const { email, password, remember } = values;
    const result = await login(email, password, remember);

    formikHelpers.setSubmitting(false);

    if (result) {
      toast.success('Authorization Succeeded');
      navigate(navigateUrl);

      return;
    }

    toast.error('Authorization Failed');
  };

  useEffect(() => {
    isAuthorized() && navigate(navigateUrl);
  });

  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Box
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
            <AuthenticationForm onSubmit={handleSubmit} />
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
