import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { FC, MouseEvent, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form } from 'formik';

import { InnerProps } from 'src/components/AuthenticationForm/types';

const InnerAuthenticationForm: FC<InnerProps> = ({
  errors,
  handleBlur,
  handleChange,
  isSubmitting,
  touched,
  values,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isEmailValid = touched.email && !!errors.email;
  const isPasswordValid = touched.password && !!errors.password;

  const handleShowPasswordClick = () => setShowPassword((prev) => !prev);

  const handleShowPasswordMouseDown = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

  // TODO: split onto components
  return (
    <Stack component={Form} noValidate spacing={3}>
      <TextField
        autoComplete="email"
        color="primary"
        error={isEmailValid}
        fullWidth
        helperText={isEmailValid && errors.email}
        label="Email"
        margin="none"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="email"
        value={values.email}
      />
      <FormControl
        color="primary"
        error={isPasswordValid}
        fullWidth
        margin="none"
        onChange={handleChange}
        required
        variant="outlined"
      >
        <InputLabel htmlFor="InnerAuthorizationForm__password-input">Password</InputLabel>
        <OutlinedInput
          autoComplete="current-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleShowPasswordClick} onMouseDown={handleShowPasswordMouseDown}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          id="InnerAuthorizationForm__password-input"
          label="Password"
          name="password"
          onBlur={handleBlur}
          type={showPassword ? 'text' : 'password'}
          value={values.password}
        />
        {isPasswordValid && <FormHelperText>{errors.password}</FormHelperText>}
      </FormControl>
      <FormControlLabel
        control={<Checkbox checked={values.remember} color="primary" />}
        label="Remember me"
        labelPlacement="start"
        name="remember"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <LoadingButton
        color="primary"
        disabled={isSubmitting}
        fullWidth
        loading={isSubmitting}
        type="submit"
        variant="contained"
      >
        Sign in
      </LoadingButton>
    </Stack>
  );
};

export default InnerAuthenticationForm;
