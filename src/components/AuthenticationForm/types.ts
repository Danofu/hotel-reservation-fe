import { FormikConfig } from 'formik';

import { Optional } from 'src/global';

export type Props = Omit<Optional<FormikConfig<IValues>, 'initialValues' | 'validationSchema'>, 'component'>;

export interface IValues {
  email: string;
  password: string;
  remember: boolean;
}
