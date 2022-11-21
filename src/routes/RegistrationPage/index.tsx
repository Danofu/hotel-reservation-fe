import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { LOGO_TEXT_LONG } from 'app-globals';
import { TPATH } from 'routes/RegistrationPage/constants';

const RegistrationPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(`${TPATH}.title`, { textLogo: LOGO_TEXT_LONG })}</title>
      </Helmet>
    </>
  );
};

export default RegistrationPage;
