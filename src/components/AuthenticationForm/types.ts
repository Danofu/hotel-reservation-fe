import { FormikConfig } from 'formik';

import { OptionalKeys } from 'global-types';

export type Props = Omit<OptionalKeys<FormikConfig<IValues>, 'initialValues' | 'validationSchema'>, 'component'>;

export interface IValues {
  email: string;
  password: string;
  remember: boolean;
}
