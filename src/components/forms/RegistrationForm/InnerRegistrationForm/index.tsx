import Fade from '@mui/material/Fade';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Form } from 'formik';
import { useTranslation } from 'react-i18next';

import PasswordField from 'components/fields/PasswordField';
import { Props } from 'components/forms/RegistrationForm/InnerRegistrationForm/types';
import { TPATH } from 'components/forms/RegistrationForm/InnerRegistrationForm/constants';

const InnerRegistrationForm: FC<Props> = ({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => {
  const { t } = useTranslation();

  const isConfirmPasswordValid = touched.confirmPassword && !!errors.confirmPassword;
  const isEmailValid = touched.email && !!errors.email;
  const isFamilyNameValid = touched.familyName && !!errors.familyName;
  const isGivenNameValid = touched.givenName && !!errors.givenName;
  const isPasswordValid = touched.password && !!errors.password;

  return (
    <Stack component={Form} noValidate spacing={6}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            autoComplete="given-name"
            color="primary"
            error={isGivenNameValid}
            fullWidth
            helperText={isGivenNameValid && errors.givenName}
            label={t(`${TPATH}.labels.given-name`)}
            margin="none"
            name="givenName"
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="text"
            value={values.givenName}
          />
          <TextField
            autoComplete="family-name"
            color="primary"
            error={isFamilyNameValid}
            fullWidth
            helperText={isFamilyNameValid && errors.familyName}
            label={t(`${TPATH}.labels.family-name`)}
            margin="none"
            name="familyName"
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="text"
            value={values.familyName}
          />
        </Stack>
        <TextField
          autoComplete="email"
          color="primary"
          error={isEmailValid}
          fullWidth
          helperText={isEmailValid && errors.email}
          label={t(`${TPATH}.labels.email`)}
          margin="none"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          type="email"
          value={values.email}
        />
        <PasswordField
          EyeButtonProps={{
            IconProps: { color: 'primary' },
            TooltipProps: { TransitionComponent: Fade, placement: 'right' },
            edge: 'end',
          }}
          InputProps={{ autoComplete: 'new-password', name: 'password', onBlur: handleBlur, value: values.password }}
          color="primary"
          error={isPasswordValid}
          errorText={errors.password}
          fullWidth
          label={t(`${TPATH}.labels.password`)}
          margin="none"
          onChange={handleChange}
          required
          variant="outlined"
        />
        <PasswordField
          EyeButtonProps={{
            IconProps: { color: 'primary' },
            TooltipProps: { TransitionComponent: Fade, placement: 'right' },
            edge: 'end',
          }}
          InputProps={{
            autoComplete: 'new-password',
            name: 'confirmPassword',
            onBlur: handleBlur,
            value: values.confirmPassword,
          }}
          color="primary"
          error={isConfirmPasswordValid}
          errorText={errors.confirmPassword}
          fullWidth
          label={t(`${TPATH}.labels.confirm-password`)}
          margin="none"
          onChange={handleChange}
          required
          variant="outlined"
        />
      </Stack>
      <LoadingButton
        color="primary"
        disabled={isSubmitting}
        fullWidth
        loading={isSubmitting}
        type="submit"
        variant="contained"
      >
        {t(`${TPATH}.labels.submit`)}
      </LoadingButton>
    </Stack>
  );
};

export default InnerRegistrationForm;
