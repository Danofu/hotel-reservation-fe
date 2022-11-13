import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Form } from 'formik';
import { useTranslation } from 'react-i18next';

import PasswordField from 'components/PasswordField';
import { Props } from 'components/AuthenticationForm/InnerAuthenticationForm/types';

const InnerAuthenticationForm: FC<Props> = ({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => {
  const { t } = useTranslation();

  const isEmailValid = touched.email && !!errors.email;
  const isPasswordValid = touched.password && !!errors.password;

  return (
    <Stack component={Form} noValidate spacing={2}>
      <TextField
        autoComplete="email"
        autoFocus
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
      <PasswordField
        EyeButtonProps={{ edge: 'end', IconProps: { color: 'primary' } }}
        InputProps={{ autoComplete: 'current-password', name: 'password', onBlur: handleBlur, value: values.password }}
        color="primary"
        error={isPasswordValid}
        errorText={errors.password}
        fullWidth
        label="Password"
        margin="none"
        onChange={handleChange}
        required
        variant="outlined"
      />
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
        {t('components.buttons.sing-in')}
      </LoadingButton>
    </Stack>
  );
};

export default InnerAuthenticationForm;

export type InnerAuthenticationFormProps = Props;
