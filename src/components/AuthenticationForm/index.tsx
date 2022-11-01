import React, { FC } from 'react';
import { Formik } from 'formik';

import InnerAuthenticationForm from 'components/AuthenticationForm/InnerAuthenticationForm';
import { Props } from 'components/AuthenticationForm/types';
import { defaultInitialValues, defaultValidationSchema } from 'components/AuthenticationForm/constants';

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
export type { IValues as IAuthenticationFormValues } from 'components/AuthenticationForm/types';
