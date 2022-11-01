import { FilledInputProps } from '@mui/material/FilledInput';
import { FormControlProps } from '@mui/material/FormControl';
import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { InputAdornmentProps } from '@mui/material/InputAdornment';
import { InputLabelProps } from '@mui/material/InputLabel';
import { InputProps } from '@mui/material/Input';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { ReactNode } from 'react';

import { VisibilityButtonProps } from 'components/buttons/VisibilityButton';

export type Props = FormControlProps & {
  endAdornmentProps?: Omit<InputAdornmentProps, 'position'>;
  errorHelperProps?: FormHelperTextProps;
  errorText?: string;
  eyeButton?: Omit<VisibilityButtonProps, 'onClick' | 'onMouseDown' | 'visible'>;
  input: Omit<FilledInputProps | InputProps | OutlinedInputProps, 'endAdornment' | 'id' | 'label' | 'type'>;
  label: ReactNode;
  labelProps?: Omit<InputLabelProps, 'htmlFor'>;
};
