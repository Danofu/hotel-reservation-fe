import { FormikHelpers } from 'formik';

export type Props = {
  initialValues?: IValues;
  onSubmit: (values: IValues, formikHelpers: FormikHelpers<IValues>) => void | Promise<unknown>;
  validationSchema?: unknown | (() => unknown);
};

export interface IValues {
  email: string;
  password: string;
  remember: boolean;
}
