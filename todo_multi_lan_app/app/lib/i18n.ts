'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // Add this for loading translations

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: ['en', 'hi', 'te', 'kn'],
      interpolation: {
        escapeValue: false,
      },
      react: { useSuspense: false },
      backend: {
        loadPath: '/locales/{{lng}}/translation.json',
      },
    });
}

export default i18n;
