import { TFunction } from 'i18next';

import { PATHNAME_HOME, PATHNAME_PROTECTED } from 'app-constants';

export const TPATH = 'components.header';

export const translatableNavLinks = (t: TFunction) => [
  { label: t(`${TPATH}.links.home`), to: PATHNAME_HOME },
  { label: t(`${TPATH}.links.protected`), to: PATHNAME_PROTECTED },
];
