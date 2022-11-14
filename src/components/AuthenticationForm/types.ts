import { FormikConfig } from 'formik';

import { IAuthenticationFormValues } from 'components/AuthenticationForm';
import { OptionalKeys } from 'app-globals';

export type Props = OptionalKeys<FormikConfig<IAuthenticationFormValues>, 'initialValues'>;
