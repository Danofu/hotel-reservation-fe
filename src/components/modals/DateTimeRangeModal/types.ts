import { BoxProps } from '@mui/material/Box';
import { ButtonProps } from '@mui/material/Button';
import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
import { ModalProps } from '@mui/material/Modal';
import { StackProps } from '@mui/material/Stack';
import { TypographyProps } from '@mui/material/Typography';

import { OptionalKeys } from 'app-globals';

export type Props = OptionalKeys<ModalProps, 'children'> & {
  ButtonProps?: ButtonProps;
  ContentWrapperProps?: StackProps;
  FieldsWrapperProps?: StackProps;
  FromDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
  HeaderProps?: TypographyProps<'h1'>;
  LocalizationProviderProps?: LocalizationProviderProps;
  PaperProps?: Omit<BoxProps, 'sx'>;
  PaperSx?: BoxProps['sx'];
  ToDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
};
