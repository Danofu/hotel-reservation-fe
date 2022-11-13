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
  EndAdornmentProps?: InputAdornmentProps;
  ErrorHelperTextProps?: FormHelperTextProps;
  EyeButtonProps?: VisibilityButtonProps;
  InputProps: FilledInputProps | InputProps | OutlinedInputProps;
  LabelProps?: InputLabelProps;
  errorText?: ReactNode;
  label: ReactNode;
};
