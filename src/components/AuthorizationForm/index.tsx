import * as Yup from 'yup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';

export type FormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const InnerAuthorizationForm: FC<FormikProps<FormValues>> = ({
  errors,
  handleBlur,
  handleChange,
  isSubmitting,
  touched,
  values,
}) => {
  const isEmailValid = touched.email && !!errors.email;
  const isPasswordValid = touched.password && !!errors.password;

  return (
    <Stack component={Form} noValidate spacing={3}>
      <TextField
        autoComplete="email"
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
      <TextField
        autoComplete="current-password"
        error={isPasswordValid}
        fullWidth
        helperText={isPasswordValid && errors.password}
        label="Password"
        margin="none"
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="password"
        value={values.password}
      />
      <FormControlLabel
        control={<Checkbox sx={{ mr: -1 }} checked={values.remember} />}
        label="Remember me"
        labelPlacement="start"
        name="remember"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <LoadingButton disabled={isSubmitting} fullWidth loading={isSubmitting} type="submit" variant="contained">
        Sign in
      </LoadingButton>
    </Stack>
  );
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => void | Promise<unknown>;
  validationSchema?: unknown | (() => unknown);
};

const defaultInitialValues: FormValues = {
  email: '',
  password: '',
  remember: false,
};

const defaultValidationSchema = Yup.object({
  email: Yup.string().required('Provide an email').email('Provide a valid email'),
  password: Yup.string().required('Provide a password').min(6, 'Provide a password with at least 6 symbols'),
  remember: Yup.boolean(),
});

const AuthorizationForm: FC<Props> = ({
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
