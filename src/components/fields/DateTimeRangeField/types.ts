import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
import { StackProps } from '@mui/material/Stack';
import { TextFieldProps } from '@mui/material/TextField';

import { OptionalKeys } from 'app-globals';

export type Props = OptionalKeys<LocalizationProviderProps, 'dateAdapter'> & {
  FieldsWrapperProps?: StackProps;
  FromDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
  FromRenderInputProps?: TextFieldProps;
  ToDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
  ToRenderInputProps?: TextFieldProps;
};
