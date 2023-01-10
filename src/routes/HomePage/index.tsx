import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { Fragment, useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { Form, Formik, FormikHelpers } from 'formik';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import DateTimeRangeField from 'components/fields/DateTimeRangeField';
import ReservationStepperModal from 'components/modals/StepperModal';
import Room from 'components/Room';
import SelectField from 'components/fields/SelectField';
import { AuthContext } from 'providers/AuthProvider';
import { LOGO_TEXT_LONG } from 'app-globals';
import { Meal, ModalFormValues, Room as RoomType } from 'routes/HomePage/types';
import { createRoomReservation, useAxios } from 'utils';
import { modalFormInitialValues, TPATH, translatableValidationSchema } from 'routes/HomePage/constants';

const HomePage = () => {
  const [isModalClosable, setIsModalClosable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const { data: meals } = useAxios<Meal>('/api/jedzenie');
  const { data: rooms } = useAxios<RoomType[]>('/api/kategorja/getAllPokoj');
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  const validationSchema = translatableValidationSchema(t);

  const handleRoomBookClick = (roomId: number) => {
    setIsModalOpen(true);
    setSelectedRoomId(roomId);
  };

  const handleModalClose = (resetForm: FormikHelpers<ModalFormValues>['resetForm']) => {
    if (!isModalClosable) {
      return;
    }
    resetForm();
    setIsModalOpen(false);
    setSelectedRoomId(null);
  };

  const handleModalSubmit = async (values: ModalFormValues, formikHelpers: FormikHelpers<ModalFormValues>) => {
    if (!user) {
      toast.error(t(`${TPATH}.reservation-modal.toasts.reservation.not-authorized`));
      return;
    }

    if (!selectedRoomId) {
      toast.error(t(`${TPATH}.reservation-modal.toasts.reservation.no-room-selected`));
      return;
    }

    if (!values.checkIn || !values.checkOut) {
      toast.error(t(`${TPATH}.reservation-modal.toasts.reservation.incomplete-dates`));
      return;
    }

    try {
      setIsModalClosable(false);
      const response = await createRoomReservation({
        checkInDate: values.checkIn.toISOString(),
        checkOutDate: values.checkOut.toISOString(),
        meals: values.meals,
        roomId: selectedRoomId,
        userId: user.id,
      });

      if (response.statusText !== 'OK') {
        toast.error(t(`${TPATH}.reservation-modal.toasts.reservation.failed`));
        return;
      }

      toast.success(t(`${TPATH}.reservation-modal.toasts.reservation.success`));
    } catch (err) {
      console.error(err);
      toast.error(t(`${TPATH}.reservation-modal.toasts.reservation.failed`));
    } finally {
      formikHelpers.resetForm();
      setIsModalClosable(true);
      setIsModalOpen(false);
    }
  };

  let pageContent = <Typography>{t(`${TPATH}.noContent`)}</Typography>;

  if (rooms?.length) {
    pageContent = (
      <Container maxWidth="xl" sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          {rooms.map((room) => (
            <Grid item key={room.id} xs={3}>
              <Room
                BookButtonProps={{ onClick: handleRoomBookClick.bind(null, room.id) }}
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
      <Formik initialValues={modalFormInitialValues} onSubmit={handleModalSubmit} validationSchema={validationSchema}>
        {({ errors, resetForm, setFieldTouched, setFieldValue, touched, values }) => (
          <Form>
            {pageContent}
            <ReservationStepperModal
              FinishButtonProps={{ type: 'submit' }}
              disablePortal
              onClose={handleModalClose.bind(null, resetForm)}
              open={isModalOpen}
              steps={[
                {
                  element: (
                    <Fragment>
                      <Typography component="h2" variant="h5">
                        {t(`${TPATH}.reservation-modal.forms.meals-form.header`)}
                      </Typography>
                      <SelectField
                        FormControlProps={{ fullWidth: true, sx: { mt: 2 } }}
                        LabelProps={{ children: t(`${TPATH}.reservation-modal.forms.meals-form.labels.meals`) }}
                        input={<OutlinedInput label={t(`${TPATH}.reservation-modal.forms.meals-form.labels.meals`)} />}
                        multiple
                        onChange={(event) =>
                          setFieldValue(
                            'meals',
                            typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value
                          )
                        }
                        renderValue={(selected) => (
                          <Stack direction="row" flexWrap="wrap" gap={0.5}>
                            {selected.map((value) => (
                              <Chip key={value} label={meals?.menu.find((meal) => meal.id === value)?.nazwa} />
                            ))}
                          </Stack>
                        )}
                        value={values.meals}
                      >
                        {meals ? (
                          meals.menu.map((meal) => (
                            <MenuItem key={meal.id} value={meal.id}>
                              <ListItemText>{meal.nazwa}</ListItemText>
                              {'zł' + meal.cena}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled value="">
                            {t(`${TPATH}.reservation-modal.forms.meals-form.select.empty`)}
                          </MenuItem>
                        )}
                      </SelectField>
                    </Fragment>
                  ),
                  isOptional: true,
                  label: t(`${TPATH}.reservation-modal.stepper.labels.meals`),
                },
                {
                  element: (
                    <Fragment>
                      <Typography component="h2" variant="h5">
                        {t(`${TPATH}.reservation-modal.forms.reservation-date-form.header`)}
                      </Typography>
                      <DateTimeRangeField
                        FieldsWrapperProps={{ mt: 2 }}
                        FromDateTimePickerProps={{
                          InputProps: { onBlur: () => setFieldTouched('checkIn') },
                          label: t(`${TPATH}.reservation-modal.forms.reservation-date-form.labels.check-in`),
                          minDateTime: moment(),
                          onChange: (value) => setFieldValue('checkIn', value),
                          value: values.checkIn,
                        }}
                        FromRenderInputProps={{
                          error: !!errors.checkIn && touched.checkIn,
                          fullWidth: true,
                          helperText: !!errors.checkIn && touched.checkIn && errors.checkIn,
                        }}
                        ToDateTimePickerProps={{
                          InputProps: { onBlur: () => setFieldTouched('checkOut') },
                          label: t(`${TPATH}.reservation-modal.forms.reservation-date-form.labels.check-out`),
                          minDateTime: values.checkIn || moment(),
                          onChange: (value) => setFieldValue('checkOut', value),
                          value: values.checkOut,
                        }}
                        ToRenderInputProps={{
                          error: !!errors.checkOut && touched.checkOut,
                          fullWidth: true,
                          helperText: !!errors.checkOut && touched.checkOut && errors.checkOut,
                        }}
                      />
                    </Fragment>
                  ),
                  label: t(`${TPATH}.reservation-modal.stepper.labels.reservation-dates`),
                },
              ]}
            />
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default HomePage;

export type { ModalFormValues };
