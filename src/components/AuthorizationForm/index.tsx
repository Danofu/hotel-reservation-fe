import * as Yup from 'yup';
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
import { Form, Formik } from 'formik';

import {
  InnerAuthorizationFormProps,
  AuthorizationFormProps,
  AuthorizationFormValues,
} from 'src/components/AuthorizationForm/types';

const InnerAuthorizationForm: FC<InnerAuthorizationFormProps> = ({
  errors,
  handleBlur,
  handleChange,
  isSubmitting,
  touched,
  values,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = touched.email && !!errors.email;
  const isPasswordValid = touched.password && !!errors.password;

  const handleShowPasswordClick = () => setShowPassword((prev) => !prev);

  const handleShowPasswordMouseDown = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

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

const defaultInitialValues: AuthorizationFormValues = {
  email: '',
  password: '',
  remember: false,
};

const defaultValidationSchema = Yup.object({
  email: Yup.string().required('Provide an email').email('Provide a valid email'),
  password: Yup.string().required('Provide a password').min(6, 'Provide a password with at least 6 symbols'),
  remember: Yup.boolean(),
});

const AuthorizationForm: FC<AuthorizationFormProps> = ({
  initialValues = defaultInitialValues,
  onSubmit,
  validationSchema = defaultValidationSchema,
}) => (
  <Formik
    component={InnerAuthorizationForm}
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  />
);

export default AuthorizationForm;
