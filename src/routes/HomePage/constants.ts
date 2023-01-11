import * as Yup from 'yup';
import { isMoment } from 'moment';

import { ModalFormValues } from 'routes/HomePage';
import { TFunction } from 'i18next';
import { ntu } from 'utils';

export const TPATH = 'pages.home';

export const modalFormInitialValues: ModalFormValues = { checkIn: null, checkOut: null, meals: [] };

export const translatableValidationSchema = (t: TFunction) =>
  Yup.object({
    checkIn: Yup.object()
      .nullable()
      .test(
        'check-in',
        t(`${TPATH}.reservation-modal.forms.reservation-date-form.errors.check-in.empty`) || '< no translation >',
        (value, context) => {
          if (value === null) {
            return false;
          }
          if (!isMoment(value) || !value.isValid()) {
            return context.createError({
              message: ntu(t(`${TPATH}.reservation-modal.forms.reservation-date-form.errors.check-in.invalid`)),
            });
          }
          if (
            isMoment(context.parent.checkOut) &&
            context.parent.checkOut.isValid() &&
            value.isAfter(context.parent.checkOut)
          ) {
            return context.createError({
              message: ntu(t(`${TPATH}.reservation-modal.forms.reservation-date-form.errors.check-in.afterCheckOut`)),
            });
          }

          return true;
        }
      ),
    checkOut: Yup.object()
      .nullable()
      .test(
        'check-out',
        t(`${TPATH}.reservation-modal.forms.reservation-date-form.errors.check-out.empty`) || '< no translation >',
        (value, context) => {
          if (value === null) {
            return false;
          }
          if (!isMoment(value) || !value.isValid()) {
            return context.createError({
              message: ntu(t(`${TPATH}.reservation-modal.forms.reservation-date-form.errors.check-out.invalid`)),
            });
          }
          if (
            isMoment(context.parent.checkIn) &&
            context.parent.checkIn.isValid() &&
            value.isBefore(context.parent.checkIn)
          ) {
            return context.createError({
              message: ntu(t(`${TPATH}.reservation-modal.forms.reservation-date-form.errors.check-out.beforeCheckOut`)),
            });
          }

          return true;
        }
      ),
  });
