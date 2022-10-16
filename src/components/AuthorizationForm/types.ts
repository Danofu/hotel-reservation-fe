import { FormikHelpers, FormikProps } from 'formik';

export type AuthorizationFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

export type InnerAuthorizationFormProps = FormikProps<AuthorizationFormValues>;

export type AuthorizationFormProps = {
  initialValues?: AuthorizationFormValues;
  onSubmit: (
    values: AuthorizationFormValues,
    formikHelpers: FormikHelpers<AuthorizationFormValues>
  ) => void | Promise<unknown>;
  validationSchema?: unknown | (() => unknown);
};
