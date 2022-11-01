import React from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';

const ProtectedPage = () => (
  <>
    <Helmet>
      <title>Protected - Hotel Booking</title>
    </Helmet>
    <Typography align="center" component="h1" m={3} variant="h5">
      Protected Page 😼
    </Typography>
  </>
);

export default ProtectedPage;
