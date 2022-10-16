import React from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
  <>
    <Helmet>Home Page</Helmet>
    <Typography align="center" component="h1" variant="h5">
      Home Page 😼
    </Typography>
  </>
);

export default IndexPage;
