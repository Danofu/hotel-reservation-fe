import { FormikConfig } from 'formik';

import { IAuthenticationFormValues } from 'components/AuthenticationForm';
import { OptionalKeys } from 'global-types';

export type Props = OptionalKeys<FormikConfig<IAuthenticationFormValues>, 'initialValues'>;
