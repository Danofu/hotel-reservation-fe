import { FormikConfig } from 'formik';

import { IAuthenticationFormValues } from 'components/forms/AuthenticationForm/index';
import { OptionalKeys } from 'app-globals';

export type Props = OptionalKeys<FormikConfig<IAuthenticationFormValues>, 'initialValues'>;
