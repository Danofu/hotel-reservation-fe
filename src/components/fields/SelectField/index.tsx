import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React, { useId } from 'react';
import Select from '@mui/material/Select';

import { Props } from 'components/fields/SelectField/types';

const SelectField = <T,>({ FormControlProps, LabelProps, ...props }: Props<T>) => {
  const labelId = useId();

  return (
    <FormControl {...FormControlProps}>
      <InputLabel id={labelId} {...LabelProps} />
      <Select labelId={labelId} {...props} />
    </FormControl>
  );
};

export default SelectField;
