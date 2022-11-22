import * as Yup from 'yup';
import { TFunction } from 'i18next';

import { ntu } from 'utils';

export const TPATH = 'components.forms.register';

export const defaultInitialValues = {
  confirmPassword: '',
  email: '',
  familyName: '',
  givenName: '',
  password: '',
};

export const defaultTranslatableValidationSchema = (t: TFunction) =>
  Yup.object({
    confirmPassword: Yup.string()
      .required(ntu(t(`${TPATH}.errors.confirm-password.empty`)))
      .equals([Yup.ref('password')], ntu(t(`${TPATH}.errors.confirm-password.not-matched`))),
    email: Yup.string()
      .required(ntu(t(`${TPATH}.errors.email.empty`)))
      .email(ntu(t(`${TPATH}.errors.email.invalid`))),
    familyName: Yup.string().required(ntu(t(`${TPATH}.errors.family-name`))),
    givenName: Yup.string().required(ntu(t(`${TPATH}.errors.given-name`))),
    password: Yup.string()
      .required(ntu(t(`${TPATH}.errors.password.empty`)))
      .min(6, ntu(t(`${TPATH}.errors.password.invalid`))),
  });
