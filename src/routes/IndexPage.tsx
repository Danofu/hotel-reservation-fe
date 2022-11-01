import React from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
  <>
    <Helmet>
      <title>Hotel Booking &bull; Home</title>
    </Helmet>
    <Typography align="center" component="h1" m={3} variant="h5">
      Home Page 😼
    </Typography>
  </>
);

export default IndexPage;
