import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Props } from 'components/fields/DateTimeRangeField/types';

const DateTimeRangeField: FC<Props> = ({
  FieldsWrapperProps,
  FromDateTimePickerProps,
  FromRenderInputProps,
  ToDateTimePickerProps,
  ToRenderInputProps,
  ...props
}) => (
  <LocalizationProvider dateAdapter={AdapterMoment} {...props}>
    <Stack direction="row" spacing={3} {...FieldsWrapperProps}>
      <DateTimePicker
        renderInput={(props: TextFieldProps) => <TextField {...props} {...FromRenderInputProps} />}
        {...FromDateTimePickerProps}
      />
      <DateTimePicker
        renderInput={(props: TextFieldProps) => <TextField {...props} {...ToRenderInputProps} />}
        {...ToDateTimePickerProps}
      />
    </Stack>
  </LocalizationProvider>
);

export default DateTimeRangeField;
