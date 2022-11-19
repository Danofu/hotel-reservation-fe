import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'translations/en.json';
import pl from 'translations/pl.json';
import uk from 'translations/uk.json';
import { STORAGE_APP_LANGUAGE } from 'app-globals';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    detection: {
      caches: ['localStorage', 'sessionStorage'],
      lookupLocalStorage: STORAGE_APP_LANGUAGE,
      lookupSessionStorage: STORAGE_APP_LANGUAGE,
    },
    fallbackLng: 'en',
    react: { useSuspense: false },
    resources: { en: { translation: en }, pl: { translation: pl }, uk: { translation: uk } },
  })
  .then();
