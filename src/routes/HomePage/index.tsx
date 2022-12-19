import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Room from 'components/Room';
import { LOGO_TEXT_LONG } from 'app-globals';
import { Room as RoomType } from 'routes/HomePage/types';
import { TPATH } from 'routes/HomePage/constants';
import { useAxios } from 'utils';

const HomePage = () => {
  const { t } = useTranslation();
  const { data: rooms } = useAxios<RoomType[]>('/api/kategorja/getAllPokoj');

  let pageContent = <Typography>{t(`${TPATH}.noContent`)}</Typography>;

  if (rooms?.length) {
    pageContent = (
      <Container maxWidth="xl" sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          {rooms.map((room) => (
            <Grid item key={room.id} xs={3}>
              <Room
                description={room.dodatkowa_informacja}
                header={room.kategorja}
                peopleAmount={room.ilosc_miejsc}
                price={room.cena}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Fragment>
      <Helmet>
        <title>{t(`${TPATH}.title`, { textLogo: LOGO_TEXT_LONG })}</title>
      </Helmet>
      <Typography component="h1" m={3} variant="h5">
        {t(`${TPATH}.heading`)}
      </Typography>
      {pageContent}
    </Fragment>
  );
};

export default HomePage;
