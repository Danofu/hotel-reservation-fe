import { TFunction } from 'i18next';

import { PATHNAME_HOME, PATHNAME_RESERVATIONS } from 'app-globals';

export const TPATH = 'components.header';

export const translatableNavLinks = (t: TFunction) => [
  { label: t(`${TPATH}.links.home`), to: PATHNAME_HOME },
  { label: t(`${TPATH}.links.reservations`), to: PATHNAME_RESERVATIONS },
];
