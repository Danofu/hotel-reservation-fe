import { FormikConfig } from 'formik';

import { IRegistrationFormValues } from 'components/forms/RegistrationForm';
import { OptionalKeys } from 'app-globals';

export type Props = OptionalKeys<FormikConfig<IRegistrationFormValues>, 'initialValues'>;
