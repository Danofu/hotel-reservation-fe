import { ButtonProps } from '@mui/material/Button';
import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { ModalProps } from '@mui/material/Modal';
import { TypographyProps } from '@mui/material/Typography';

import { OptionalKeys } from 'app-globals';

export type Props = OptionalKeys<ModalProps, 'children'> & {
  ButtonProps?: ButtonProps;
  FromDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
  HeaderProps?: TypographyProps<'h1'>;
  ToDateTimePickerProps: OptionalKeys<DateTimePickerProps<unknown, unknown>, 'renderInput'>;
};
