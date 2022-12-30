import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { Fragment, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Form, Formik, FormikValues } from 'formik';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import DateTimeRangeModal from 'components/modals/DateTimeRangeModal';
import Room from 'components/Room';
import { LOGO_TEXT_LONG } from 'app-globals';
import { Room as RoomType } from 'routes/HomePage/types';
import { TPATH } from 'routes/HomePage/constants';
import { useAxios } from 'utils';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: rooms } = useAxios<RoomType[]>('/api/kategorja/getAllPokoj');
  const { t } = useTranslation();

  const handleRoomClick = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  const handleModalSubmit = (values: FormikValues) => {
    console.log('values', values);
    setIsModalOpen(false);
  };

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
                onClick={handleRoomClick}
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
      <Formik initialValues={{ checkIn: null, checkOut: null }} onSubmit={handleModalSubmit}>
        {({ setFieldValue, values }) => (
          <Form>
            {pageContent}
            <DateTimeRangeModal
              ButtonProps={{ children: t(`${TPATH}.reservation-modal.button`), type: 'submit' }}
              FromDateTimePickerProps={{
                label: t(`${TPATH}.reservation-modal.check-in-field-label`),
                onChange: (value) => setFieldValue('checkIn', value),
                value: values.checkIn,
              }}
              ToDateTimePickerProps={{
                label: t(`${TPATH}.reservation-modal.check-out-field-label`),
                onChange: (value) => setFieldValue('checkOut', value),
                value: values.checkOut,
              }}
              HeaderProps={{ children: t(`${TPATH}.reservation-modal.header`) }}
              disablePortal
              onClose={handleModalClose}
              open={isModalOpen}
            />
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default HomePage;
