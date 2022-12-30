import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Props } from 'components/modals/DateTimeRangeModal/types';
import { modalContainer } from 'components/modals/DateTimeRangeModal/constants';

const DateTimeRangeModal: FC<Props> = ({
  ButtonProps,
  FromDateTimePickerProps,
  HeaderProps,
  ToDateTimePickerProps,
  ...props
}) => (
  <Modal container={modalContainer} {...props}>
    <Box
      bgcolor="background.paper"
      borderRadius={3}
      boxShadow={4}
      left="50%"
      minWidth={400}
      p={4}
      position="absolute"
      sx={{ translate: '-50% -50%' }}
      top="50%"
    >
      <Stack spacing={3}>
        <Typography align="center" component="h1" variant="h5" {...HeaderProps} />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack direction="row" spacing={3}>
            <DateTimePicker
              renderInput={(props: TextFieldProps) => <TextField {...props} />}
              {...FromDateTimePickerProps}
            />
            <DateTimePicker
              renderInput={(props: TextFieldProps) => <TextField {...props} />}
              {...ToDateTimePickerProps}
            />
          </Stack>
        </LocalizationProvider>
        <Button variant="contained" {...ButtonProps} />
      </Stack>
    </Box>
  </Modal>
);

export default DateTimeRangeModal;
