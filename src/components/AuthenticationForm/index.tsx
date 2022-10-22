import React, { FC } from 'react';
import { Formik } from 'formik';

import InnerAuthenticationForm from 'src/components/AuthenticationForm/InnerAuthenticationForm';
import { Props } from 'src/components/AuthenticationForm/types';
import { defaultInitialValues, defaultValidationSchema } from 'src/components/AuthenticationForm/constants';

const AuthenticationForm: FC<Props> = ({
  initialValues = defaultInitialValues,
  validationSchema = defaultValidationSchema,
  ...props
}) => (
  <Formik
    component={InnerAuthenticationForm}
    initialValues={initialValues}
    validationSchema={validationSchema}
    {...props}
  />
);

export default AuthenticationForm;

export type AuthenticationForm = Props;
export type { IValues as IAuthenticationFormValues } from 'src/components/AuthenticationForm/types';
