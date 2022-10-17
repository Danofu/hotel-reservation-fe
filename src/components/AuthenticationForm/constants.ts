import * as Yup from 'yup';

import { IValues } from 'src/components/AuthenticationForm/types';

export const defaultInitialValues: IValues = {
  email: '',
  password: '',
  remember: false,
};

export const defaultValidationSchema = Yup.object({
  email: Yup.string().required('Provide an email').email('Provide a valid email'),
  password: Yup.string().required('Provide a password').min(6, 'Provide a password with at least 6 symbols'),
  remember: Yup.boolean(),
});
