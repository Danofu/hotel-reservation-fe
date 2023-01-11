import Container from '@mui/material/Container';
import React, { Fragment, ReactNode, useContext } from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import Reservation from 'components/Reservation';
import { AuthContext } from 'providers/AuthProvider';
import { LOGO_TEXT_LONG } from 'app-globals';
import { Reservation as ReservationType } from 'routes/ReservationsPage/types';
import { TPATH } from 'routes/ReservationsPage/constant';
import { deleteReservation, useAxios } from 'utils';

const ReservationsPage = () => {
  const { user } = useContext(AuthContext);
  const { data: reservations, setData: setReservations } = useAxios<ReservationType[]>(
    `api/rezerwacja/getAllByUser?id_user=${user ? user.id : null}`
  );
  const { t } = useTranslation();

  let reservationsContent: ReactNode = (
    <Typography mt={3} variant="h6">
      {t(`${TPATH}.noContent`)}
    </Typography>
  );

  if (reservations?.length) {
    const handleReservationHandle = async (id: number) => {
      const result = window.confirm(t(`${TPATH}.cancel-confirm`));
      if (!result) {
        return;
      }

      try {
        const response = await deleteReservation(id);

        if (response.statusText !== 'OK') {
          toast.error(t(`${TPATH}.toasts.reservation-cancel.failed`));
          return;
        }

        toast.success(t(`${TPATH}.toasts.reservation-cancel.success`));
        setReservations((prevReservations) => prevReservations?.filter((reservation) => reservation.id !== id));
      } catch (err) {
        console.log(err);
        toast.error(t(`${TPATH}.toasts.reservation-cancel.failed`));
      }
    };

    reservationsContent = reservations
      .sort((reservationA, reservationB) =>
        moment(reservationA.check_in).isBefore(moment(reservationB.check_in)) ? -1 : 1
      )
      .map((reservation, index) => (
        <Reservation
          checkIn={moment(reservation.check_in)}
          checkOut={moment(reservation.check_out)}
          description={reservation.pokoj.kategorja.dodatkowa_informacja}
          header={reservation.pokoj.kategorja.kategorja}
          key={reservation.id}
          meals={reservation.jedzenie.map((meal) => meal.menu.nazwa)}
          onCancel={handleReservationHandle.bind(null, reservation.id)}
          peopleAmount={reservation.pokoj.kategorja.ilosc_miejsc}
          price={reservation.suma}
          sx={{ mt: index === 0 ? 3 : 5 }}
        />
      ));
  }

  return (
    <Fragment>
      <Helmet>
        <title>{t(`${TPATH}.title`, { textLogo: LOGO_TEXT_LONG })}</title>
      </Helmet>
      <Container sx={{ py: 3 }}>
        <Typography variant="h5">{t(`${TPATH}.header`)}</Typography>
        {reservationsContent}
      </Container>
    </Fragment>
  );
};

export default ReservationsPage;
