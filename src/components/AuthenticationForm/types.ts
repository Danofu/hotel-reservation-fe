import { FormikHelpers, FormikProps } from 'formik';

export type AuthenticationFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

export type InnerAuthenticationFormProps = FormikProps<AuthenticationFormValues>;

export type AuthenticationFormProps = {
  initialValues?: AuthenticationFormValues;
  onSubmit: (
    values: AuthenticationFormValues,
    formikHelpers: FormikHelpers<AuthenticationFormValues>
  ) => void | Promise<unknown>;
  validationSchema?: unknown | (() => unknown);
};
