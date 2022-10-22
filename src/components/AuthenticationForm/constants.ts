import * as Yup from 'yup';

import { IAuthenticationFormValues } from 'src/components/AuthenticationForm';

export const defaultInitialValues: IAuthenticationFormValues = {
  email: '',
  password: '',
  remember: false,
};

export const defaultValidationSchema = Yup.object({
  email: Yup.string().required('Provide an email').email('Provide a valid email'),
  password: Yup.string().required('Provide a password').min(6, 'Provide a password with at least 6 symbols'),
  remember: Yup.boolean(),
});
