import React, { FC } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import InnerAuthenticationForm from 'components/forms/AuthenticationForm/InnerAuthenticationForm';
import { Props } from 'components/forms/AuthenticationForm/types';
import {
  defaultInitialValues,
  defaultTranslatableValidationSchema,
} from 'components/forms/AuthenticationForm/constants';

const AuthenticationForm: FC<Props> = ({ initialValues = defaultInitialValues, validationSchema, ...props }) => {
  const { t } = useTranslation();

  const defaultValidationSchema = defaultTranslatableValidationSchema(t);

  return (
    <Formik
      component={InnerAuthenticationForm}
      initialValues={initialValues}
      validationSchema={validationSchema || defaultValidationSchema}
      {...props}
    />
  );
};

export default AuthenticationForm;

export type AuthenticationFormProps = Props;
export type { IValues as IAuthenticationFormValues } from 'components/forms/AuthenticationForm/interfaces';
