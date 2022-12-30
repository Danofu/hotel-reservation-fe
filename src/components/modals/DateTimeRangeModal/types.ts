import { BoxProps } from '@mui/material/Box';
import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
import { ModalProps } from '@mui/material/Modal';
import { StackProps } from '@mui/material/Stack';
import { TextFieldProps } from '@mui/material/TextField';
import { TypographyProps } from '@mui/material/Typography';

import { OptionalKeys } from 'app-globals';

export type Props = OptionalKeys<ModalProps, 'children'> & {
  ButtonProps?: LoadingButtonProps;
  ContentWrapperProps?: StackProps;
  FieldsWrapperProps?: StackProps;
  FromDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
  FromRenderInputProps?: TextFieldProps;
  HeaderProps?: TypographyProps<'h1'>;
  LocalizationProviderProps?: LocalizationProviderProps;
  PaperProps?: Omit<BoxProps, 'sx'>;
  PaperSx?: BoxProps['sx'];
  ToDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
  ToRenderInputProps?: TextFieldProps;
};
