import { FormControlProps } from '@mui/material/FormControl';
import { InputLabelProps } from '@mui/material/InputLabel';
import { SelectProps } from '@mui/material/Select';

export type Props<T> = SelectProps<T> & { FormControlProps?: FormControlProps; LabelProps?: InputLabelProps };
