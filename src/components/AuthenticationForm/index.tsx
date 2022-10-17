import React, { FC } from 'react';
import { Formik } from 'formik';

import InnerAuthenticationForm from 'src/components/AuthenticationForm/InnerAuthenticationForm';
import { Props } from 'src/components/AuthenticationForm/types';
import { defaultInitialValues, defaultValidationSchema } from 'src/components/AuthenticationForm/constants';

const AuthenticationForm: FC<Props> = ({
  initialValues = defaultInitialValues,
  onSubmit,
  validationSchema = defaultValidationSchema,
}) => (
  <Formik
    component={InnerAuthenticationForm}
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  />
);

export default AuthenticationForm;
