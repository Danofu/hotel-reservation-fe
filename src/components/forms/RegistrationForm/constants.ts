import * as Yup from 'yup';
import { TFunction } from 'i18next';

import { ntu } from 'utils';

export const TPATH = 'components.forms.registration';

export const defaultInitialValues = {
  'confirm-password': '',
  'family-name': '',
  'given-name': '',
  email: '',
  password: '',
};

export const defaultTranslatableValidationSchema = (t: TFunction) =>
  Yup.object({
    'confirm-password': Yup.string()
      .required(ntu(t(`${TPATH}.errors.confirm-password.empty`)))
      .equals([Yup.ref('password')], ntu(t(`${TPATH}.errors.confirm-password.not-matched`))),
    'family-name': Yup.string().required(ntu(t(`${TPATH}.errors.family-name`))),
    'given-name': Yup.string().required(ntu(t(`${TPATH}.errors.given-name`))),
    email: Yup.string()
      .required(ntu(t(`${TPATH}.errors.email.empty`)))
      .email(ntu(t(`${TPATH}.errors.email.invalid`))),
    password: Yup.string()
      .required(ntu(t(`${TPATH}.errors.password.empty`)))
      .min(6, ntu(t(`${TPATH}.errors.password.invalid`))),
  });
