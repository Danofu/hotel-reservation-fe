import * as Yup from 'yup';
import { TFunction } from 'i18next';

import ntu from 'utils/ntu';

export const TPATH = 'components.forms.authentication';

export const defaultInitialValues = { email: '', password: '', remember: false };

export const defaultTranslatableValidationSchema = (t: TFunction) =>
  Yup.object({
    email: Yup.string()
      .required(ntu(t(`${TPATH}.errors.email.empty`)))
      .email(ntu(t(`${TPATH}.errors.email.invalid`))),
    password: Yup.string()
      .required(ntu(t(`${TPATH}.errors.password.empty`)))
      .min(6, ntu(t(`${TPATH}.errors.password.invalid`))),
    remember: Yup.boolean(),
  });
