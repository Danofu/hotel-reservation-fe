import React, { FC } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import InnerRegistrationForm from 'components/forms/RegistrationForm/InnerRegistrationForm';
import { Props } from 'components/forms/RegistrationForm/types';
import { defaultInitialValues, defaultTranslatableValidationSchema } from 'components/forms/RegistrationForm/constants';

const RegistrationForm: FC<Props> = ({ initialValues = defaultInitialValues, validationSchema, ...props }) => {
  const { t } = useTranslation();

  const defaultValidationSchema = defaultTranslatableValidationSchema(t);

  return (
    <Formik
      component={InnerRegistrationForm}
      initialValues={initialValues}
      validationSchema={validationSchema || defaultValidationSchema}
      {...props}
    />
  );
};

export default RegistrationForm;

export type { IValues as IRegistrationFormValues } from 'components/forms/RegistrationForm/interfaces';
export type { Props as RegistrationFormProps } from 'components/forms/RegistrationForm/types';
