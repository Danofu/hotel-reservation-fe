import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import React, { FC, MouseEvent, useId, useState } from 'react';

import VisibilityButton from 'components/buttons/VisibilityButton';
import { Props } from 'components/PasswordInput/types';
import { inputMap } from 'components/PasswordInput/constans';

const PasswordInput: FC<Props> = ({
  endAdornmentProps,
  error,
  errorHelperProps,
  errorText,
  eyeButton,
  input,
  label,
  labelProps,
  variant = 'standard',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = useId();

  const Input = inputMap[variant];

  const handleShowPasswordClick = () => setShowPassword((prev) => !prev);

  const handleShowPasswordMouseDown = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

  return (
    <FormControl error={error} variant={variant} {...props}>
      <InputLabel htmlFor={inputId} {...labelProps}>
        {label}
      </InputLabel>
      <Input
        endAdornment={
          <InputAdornment position="end" {...endAdornmentProps}>
            <VisibilityButton
              onClick={handleShowPasswordClick}
              onMouseDown={handleShowPasswordMouseDown}
              visible={!showPassword}
              {...eyeButton}
            />
          </InputAdornment>
        }
        id={inputId}
        label={label}
        type={showPassword ? 'text' : 'password'}
        {...input}
      />
      {error && <FormHelperText {...errorHelperProps}>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;

export type PasswordInputProps = Props;
