import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import React, { FC, MouseEvent, useId, useState } from 'react';

import VisibilityButton from 'components/buttons/VisibilityButton';
import { Props } from 'components/PasswordInput/types';
import { inputMapper } from 'components/PasswordInput/constans';

const PasswordInput: FC<Props> = ({
  EndAdornmentProps,
  ErrorHelperTextProps,
  EyeButtonProps,
  InputProps,
  LabelProps,
  error,
  errorText,
  label,
  variant = 'standard',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = useId();

  const Input = inputMapper[variant];

  const handleShowPasswordClick = () => setShowPassword((prev) => !prev);

  const handleShowPasswordMouseDown = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

  return (
    <FormControl error={error} variant={variant} {...props}>
      <InputLabel htmlFor={inputId} {...LabelProps}>
        {label}
      </InputLabel>
      <Input
        endAdornment={
          <InputAdornment position="end" {...EndAdornmentProps}>
            <VisibilityButton
              onClick={handleShowPasswordClick}
              onMouseDown={handleShowPasswordMouseDown}
              visible={!showPassword}
              {...EyeButtonProps}
            />
          </InputAdornment>
        }
        id={inputId}
        label={label}
        type={showPassword ? 'text' : 'password'}
        {...InputProps}
      />
      {error && <FormHelperText {...ErrorHelperTextProps}>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;

export type PasswordInputProps = Props;
